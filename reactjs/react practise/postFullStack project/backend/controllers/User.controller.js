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

    console.log(accessToken)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")
    console.log(loggedInUser)


    // send cookies
    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken,options)
    .cookie("refreshToken", refreshToken,options)
    .json(
        new ApiResponse(200, {
            user: loggedInUser, accessToken, refreshToken
        },"user logged is successfully")
    )

})


// Getcurrent user
const getCurrentUser = AsynceHendler(async (req, res) =>{
    const userId = req.user._id;

    const curentUser = await User.findById(userId).select("-password -refreshToken");
    console.log(curentUser)


    if(!curentUser){
        throw new ApiError(404, "user not found")
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200, {curentUser}, "current user fetched successfully")
    )
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
    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken",options)
    .cookie("refreshToken",options)
    .json(
        new ApiResponse(200, {},"user logout is successfully")
    )
    

})

// refreshtokken and accestoken 
const refreshAccessToken = AsynceHendler(async (req, res) =>{
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if(!incomingRefreshToken){
        throw new ApiError(401,"unauthorized requiret")
    }

    try {
        const decodedToken = jwt.verify( // jwt is accesse and refresh token for help of match cookie.refresh takon and body.refress tokon and 200 error healnling
            incomingRefreshToken, 
            process.env.REFRESH_TOKEN_SECRET
        )
    
    
        const user = await User.findById(decodedToken?._id)
    
        if(!user){
            throw new ApiError(401, "invalid refresh token")
        }
    
    
        if(incomingRefreshToken !== user?.refreshToken){
            throw new ApiError(401,"refresh token is expired or used")
        }
    
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        const {accessToken, newRefreshToken} = await genrateAccessAndRefreshToken(user._id)
        // console.log(accessToken)
    
        return res
        .status(200)
        .cookie("accessToken", accessToken,options)
        .cookie("newRefreshToken",newRefreshToken,options)
        .json(
            new ApiResponse(200,
                {
                    accessToken,refreshToken:newRefreshToken
                },
                "Access token refreshed"
            )
        )
    } catch (error) {
        throw new ApiError(401, error?.message || "invalid refresh token") 
        
    }


})

const updateUser = AsynceHendler(async (req, res) => {
    try {
        const userId = req.user._id;
        const {username, fullname, email} = req.body;

        if(!userId){
            throw new ApiError(404, "user not found")
        }

        const updateUser = await User.findByIdAndUpdate(
            userId,
            {
                $set:{
                    username:username,
                    fullname:fullname,
                    email:email
                }
            },
            {
                new:true
            }
        )

        if(!updateUser){
            throw new ApiError(404, "user not upated")
        }
        
        return res
        .status(200)
        .json(
            new ApiResponse(200, {updateUser} , "susscefully updated user")
        )
    } catch (error) {
        throw new ApiError(401, error?.message || "invalid  user") 
        
    }

});


const userSavePost = AsynceHendler( async (req,res) =>{
    try {
        const userId = req.user._id;

        const user = await User.findById(userId).populate("savePosts");
        console.log("data",user)

        if(!user){
            throw new ApiError(404, "user not found")
        }


        return res
        .status(200)
        .json(
            new ApiResponse(200, user.savePosts, "succesfully get savepost")
        )
        
    } catch (error) {
        throw new ApiError(500, error.message)
        
    }

});


const follow = AsynceHendler(async (req, res) =>{
    try {
        const {userId} = req.params;
        const followerId = req.user._id;


        if(userId === followerId.toString()){
            throw new ApiError(400, "You connot follow yourself");
        }

        const user = await User.findById(userId);

        if(!user){
            throw new ApiError(404, "user not found")
        }

        if(!user.followers.includes(followerId)){
            user.followers.push(followerId);
            await user.save();
        }

        return res
        .status(200)
        .json(
            new ApiResponse(200, {user} , "succesfully")
        )
        
    } catch (error) {
        throw new ApiError(500, error.message)
        
    }


})

const unfollow = AsynceHendler(async (req, res) => {
    try {
        const {userId} = req.params;
        const followerId = req.user._id
        
        const user = await User.findById(userId);
        
        if(!user){
            throw new ApiError(404, "user not found")
        }

        // Remove the followerId from the user's followers array

        user.followers = user.followers.filter(id => id.toString() !== followerId.toString());
        await user.save();

        return res
        .status(200)
        .json(
            new ApiResponse(200, {user}, "success")
        )
        
    } catch (error) {
        throw new ApiError(500, error.message)
        
    }

})







export {
    regitsterUser,
    loginUser,
    getCurrentUser,
    logoutUser,
    refreshAccessToken,
    updateUser,
    userSavePost,
    follow,
    unfollow

}