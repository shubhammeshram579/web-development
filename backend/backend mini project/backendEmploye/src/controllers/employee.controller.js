import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Employees } from "../models/employee.model.js";

const genrateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await Employees.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while genrating refresh and access token",
    );
  }
};

const empRegister = asyncHandler(async (req, res) => {
  try {
    const { employeeName, email, password, occupation } = req.body;

    if (!employeeName || !email || !password || !occupation) {
      throw new ApiError(404, "all field is required");
    }

    const existedEmploye = await Employees.findOne({
      $or: [{ employeeName }, { email }],
    });

    if (existedEmploye) {
      throw new ApiError(404, "emplyee allready registed");
    }

    const employee = await Employees.create({
      employeeName: employeeName,
      email: email,
      password,
      occupation: occupation,
    });

    const createEmp = await Employees.findById(employee._id).select(
      "-password -refreshToken",
    );

    if (!createEmp) {
      throw new ApiError(500, "employee not register");
    }

    return res
      .status(201)
      .json(new ApiResponse(200, createEmp, "employee register succesfully"));
  } catch (error) {
    throw new ApiError(401, error?.message || "employee register eror");
  }
});

const empLogin = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new ApiError(404, "email and password is required");
    }

    const employee = await Employees.findOne({
      $or: [{ email }],
    });

    if (!employee) {
      throw new ApiError(404, "employee not found");
    }

    const isPasswordValid = await employee.isPasswordCorrect(password);

    if (!isPasswordValid) {
      throw new ApiError(404, "password is invaid");
    }

    const { accessToken, refreshToken } = await genrateAccessAndRefreshToken(
      employee._id,
    );

    const loginemployee = await Employees.findById(employee._id).select(
      "-password -refreshToken",
    );

    if (!loginemployee) {
      throw new ApiError(500, "employee user not login");
    }

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponse(
          200,
          {
            employee: loginemployee,
            accessToken,
            refreshToken,
          },
          "user logged in successfully",
        ),
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "employee not login eror");
  }
});

const emplogout = asyncHandler(async (req, res) => {
  try {

    const {userId} = req.body

     await Employees.findByIdAndUpdate(
        userId,
        {
            $set:{
                refreshToken: undefined
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(new ApiResponse(200, {}, "user logout succesfully"))
    
  } catch (error) {
    throw new ApiError(401, error?.message || "employee not logout eror");
  }
});



export { empRegister, empLogin,emplogout };
