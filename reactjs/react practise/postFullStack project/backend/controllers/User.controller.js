import {AsynceHendler} from "../utils/AsynceHendler.js"
import {ApiError}  from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {User} from "../models/User.model.js"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"



// accestoken
const genrateAccessAndRefreshToken = async(userId)=> {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateAccessToken()
    
        user.refreshToken = refreshToken
    
        await user.save({validateBeforeSave:false})
    
        return {accessToken,refreshToken }

    } catch (error) {
        throw new ApiError(500, "Something went wrong while genrating refresh and access token")
        
    }
}


// user registration 
const regitsterUser = AsynceHendler( async (req, res) => {
    // databody
    const {fullname,username,  email, password} = req.body;

    console.log(req.body)

    // error definde
    if(
        [fullname,username, email, password].some((field)=> field?.trim() === "")
    ){
        throw new ApiError(400, "All field are required")

    }


    // check email is allread exited
    const exidtedUser = await User.findOne({
        $or: [{username}, {email}]
    })

    if(exidtedUser){
        throw new ApiError(409, "email addres allread used")
    }

    const user = await User.create({
        fullname,
        username: username.toLowerCase(),
        email,
        password,
    })

    const createUser = await User.findById(user._id).select(
        "-password -refreshToken"

    )

    if(!createUser){
        throw new ApiError(500, "sonting went wrong")
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200,createUser , "user regitrer succefully")
    )

})


// login user
const loginUser = AsynceHendler( async (req, res) => {
    const {username, email, password} = req.body;

    if (!(username || email)){
        throw new ApiError(400, "username or password is required")
    }

    const user = await User.findOne({
        $or : [{username},{email}]
    })

    if(!user){
        throw new ApiError(400, "user not exits")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if(!isPasswordValid){
        throw new ApiError(401 , "invalid password")
    }

    const {accessToken, refreshToken} = await genrateAccessAndRefreshToken(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")


    // send cookies
    const option = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken,option)
    .cookie("refreshToken", refreshToken,option)
    .json(
        new ApiResponse(200, {
            user: loggedInUser, accessToken, refreshToken
        },"user logged is successfully")
    )

})


// Getcurrent user
const getCurrentUser = AsynceHendler(async (req, res) =>{
    return res
    .status(200)
    .json(200, req.user, "current user fetched successfully")
})


// logoutUser
const logoutUser = AsynceHendler( async (req,res)=>{
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set:{
                refreshToken: undefined
            }

        },{
            new: true
        }

    )


    // send cookies
    const option = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken",option)
    .cookie("refreshToken",option)
    .json(
        new ApiResponse(200, {},"user logout is successfully")
    )
    

})







export {
    regitsterUser,
    loginUser,
    getCurrentUser,
    logoutUser

}