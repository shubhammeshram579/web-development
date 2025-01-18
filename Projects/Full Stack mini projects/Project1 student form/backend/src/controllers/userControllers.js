import asyncHandler from "../Utils/asyncHandler.js"
import {ApiError} from "../Utils/apiErrors.js" 
import {ApiResponse} from "../Utils/apiResponse.js"
import {User} from "../Models/User.Model.js"
import mongoose from "mongoose";
import jwt from "jsonwebtoken";



// methods
const genrateAccessAndRefreshToken = async(userId) =>  {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({validateBeforeSave:false})

        return {accessToken,refreshToken}
        
    } catch (error) {
        throw new ApiError(500,"Something went wrong while genrating refresh and access token")
        
    }

}
// regiter user

const registerUser = asyncHandler( async (req,res) => {
    try {
        const {username,fullname,email,password} = req.body;

        console.log(req.body);

        if(
            [fullname,email,username,password].some((field)=>
            field?.trim() === "")
        ){
            throw new ApiError(400, "all field are required")
        }

        // user is allready exit
        const existedUsed = await User.findOne(
            {
                $or:[{username},{email}]
            }
        )

        if(existedUsed){
            throw new ApiError(409 , "username and email already exit")
        }

         // 5. create user object - create entry in mongodb
         const user = await User.create({
            username: username.toLowerCase(),
            fullname,
            email,
            password

         })

         // do not show database db
         const createUser = await User.findById(user._id).select(
            "-password -refreshToken"

         )

         if(!createUser){
            throw new ApiError(500, "somthing went wrong while register user")
         }

         return res.status(201).json(
            new ApiResponse(200,createUser,"user register successfully")
         )


        
    } catch (error) {
        console.log(error.message || "somthing went wrong")
        
    }
});

const loginUser = asyncHandler( async (req,res) => {
    try {

        const {username,email,password} = req.body;

        if(!(username || email) ){
            throw new ApiError(400, "username and password is required")
        }

        const user = await User.findOne({
            $or: [{username},{email}]
        })

        if(!user){
            throw new ApiError(400, "user not is exits")
        }

        const isPasswordValid = await user.isPasswordCorrect(password)
        if(!isPasswordValid){
            throw new ApiError(400, "invalid password")
        }

        const {accessToken,refreshToken} = await genrateAccessAndRefreshToken(user._id)

        const loggedInUser =  await User.findById(user._id).select("-password -refreshToken")


        // send cookie
        const option = {
            httpOnly:true,
            secure: true
        }

        return res
        .status(200)
        .cookie("accessToken",accessToken,option)
        .cookie("refreshToken",refreshToken,option)
        .json(
            new ApiResponse(200,{
                user: loggedInUser,accessToken,refreshToken
            }, "user login succesfully")
        )

    } catch (error) {
        console.log(error.message || "something went wrong")
        
    }

});


// logout user
const logoutUser = asyncHandler(async (req, res) =>{
    await User.findByIdAndUpdate(
        req.user._id,
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


})


export{
    registerUser,
    loginUser,
    logoutUser

}