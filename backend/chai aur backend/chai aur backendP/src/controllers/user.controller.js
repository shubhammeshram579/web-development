import asyncHandler from "../utils/asynceHendler.js"
import {ApiError} from "../utils/apiErrors.js"
import {User} from "../models/user.models.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/apiResponse.js"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"

// methods 
const genrateAccessAndRefreshToken = async(userId) =>{
    try {
        const user = await User.findById(userId)
        const accessToken =   user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})

        return {accessToken, refreshToken}
        
    } catch (error) {
        throw new ApiError(500,"Something went wrong while genrating refresh and access token")
        
    }

}

// registerUser
const registerUser = asyncHandler( async (req,res) => {

    // testing postman 
    // res.status(200).json({
    //     massage: "shubham meshram"
    // })


    // register user then need i need this type off error Henlders
    // get user deatail from frontent
    // validation - not empty
    // check if user already exiteds: username, email
    // check for image , check for avatar
    // uload them to cloubderi , avrtar
    // create user object - crete entry in db
    // remove password and refress token from response
    // check for user creation
    //return res




    // 1. get user deatail from frontent
    const {fullname,email,username,password} = req.body
    // console.log("email: ",email)

    console.log(req.body)

    // begeneire level  error set code
    // if (fullname === ""){
    //     throw new ApiError(400, "fullname is required")
    // }



    // advance level error hendling 
    if(
        [fullname,email,username,password].some((field)=>
        field?.trim() === "")
    ){
        throw new ApiError(400, "all field are required")
    }




// 2. check if user already exiteds: username, email
    const existedUser = await User.findOne({
        $or: [{username},{email}]
    })

    if (existedUser){
        throw new ApiError(409,"User with email or username allready exists")
    }


     //3.  check for image , check for avatar
    const avatarLocalPath = req.files?.avatar[0]?.path;
    // console.log(avatarLocalPath)

    // const coverImageLocalPath = req.files?.coverImage[0]?.path;


    // file length undefind then hedling code
    let coverImageLocalPath;
    if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0){
        coverImageLocalPath = req.files.coverImage[0].path
    }

    if (!avatarLocalPath){
        throw new ApiError(400, "Avatar file is required")
    }


    // 4. upload them to cloubderi , avrtar
    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar){
        throw new ApiError(400, "Aavatar file is required")

    }


    // 5. create user object - create entry in mongodb
    const user = await User.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })


    // do not show database db
    const createUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )


    if (!createUser){
        throw new ApiError(500, "somting went rwong  while register the user")
    }


     // 6. return res
    return res.status(201).json(
        new ApiResponse(200,createUser,"User registered succesfully")
    )


})

// login user
const loginUser = asyncHandler(async (req, res)=>{
    // task list
    // 1. req body -> data
    // 2. username and email 
    // 3. find the user 
    // 5. password check
    // 6. access and refresh token 
    // 7. send cookie


    const {email, username, password} = req.body


    if (!(username || email)){
        throw new ApiError(400, "username or password is required")
    }


    const user = await User.findOne({
        $or : [{username},{email}]
    })


    if(!user){
        throw new ApiError(404, "user not is exits")
    }


    const isPasswordValid = await user.isPasswordCorrect(password)

    if(!isPasswordValid){
        throw new ApiError(401, "Invalid is passwords")
    }




    const {accessToken, refreshToken} = await genrateAccessAndRefreshToken(user._id)

    const loggedInUser =  await User.findById(user._id).select("-password -refreshToken")



    // send cookie
    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken ,options)
    .json(
        new ApiResponse(
            200,{
                user: loggedInUser,accessToken,refreshToken
            },
            "user logged in successfully"
        )
    )

    console.log(loggedInUser)

})


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



// refreshtokken and accestoken 
const refreshAccessToken = asyncHandler(async (req, res) =>{
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if(!incomingRefreshToken){
        throw new ApiError(401,"unauthorized requiret")
    }

    try {
        const  decodedToken = jwt.verify( // jwt is accesse and refresh token for help of match cookie.refresh takon and body.refress tokon and 200 error healnling
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



// change current passwords conlorer
const changeCurrentPassword = asyncHandler(async (req, res) =>{

    const {oldPassword, newPassword} = req.body

   const user = await User.findById(req.user?._id)
   const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)


   if (!isPasswordCorrect){
    throw new ApiError(400, "invalid old password")
   }

   user.password = newPassword
   await user.save({validateBeforeSave:false})


   return res
   .status(200)
   .json(new ApiResponse(200, {}, "password change successfully"))



})


// Getcurrent user
const getCurrentUser = asyncHandler(async (req, res) =>{
    return res
    .status(200)
    .json(200, req.user, "current user fetched successfully")
})

// updateAccountDetails
const updateAccountDetails = asyncHandler(async (req, res)=>{
    const {fullname, email} = req.body
    console.log(req.body)

    if (!fullname || !email) { 
        throw new ApiError(400, "all field are required")

    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                fullname,
                email,
            }
        },
        {new:true}
    ).select("-password")


    return res
    .status(200)
    .json(new ApiResponse(200, user, "account details updated successfully"))

})


// update user avater 
const updateUserAvatar = asyncHandler(async (req, res)=>{
    const avatarLocalPath = req.file?.path

    if(!avatarLocalPath){
        throw new ApiError(400,"avatar file is missing")
    }

    const avater = await uploadOnCloudinary(avatarLocalPath)


    if(!avater.url){
        throw new ApiError(400,"Error while uploading on avatar")
    }


    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set:{
                avater: avater.url
            }
        },{
            new: true
        }

    ).select("-password")


    return res
    .status(200)
    .json(new ApiResponse(200,user, "avatar image updated successfully"))



})


// coverImage updated
const updateUsercoverImage = asyncHandler(async (req, res)=>{
    const coverImageLocalPath = req.file?.path

    if(!coverImageLocalPath){
        throw new ApiError(400,"coverImage file is missing")
    }

    const coverImage = await uploadOnCloudinary(coverImageLocalPath)


    if(!coverImage.url){
        throw new ApiError(400,"Error while uploading on coverImage")
    }


    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set:{
                coverImage: coverImage.url
            }
        },{
            new: true
        }

    ).select("-password")


    return res
    .status(200)
    .json(new ApiResponse(200,user, "coverImage image updated successfully"))



})


// Aggregate pipline for getUserChannelProfile
const getUserChannelProfile = asyncHandler(async (req, res) =>{

    const {username} = req.params

    if(!username){
        throw new ApiError(400, "username is missing")
    }

    const channel = await User.aggregate([

        // match colume usename
        {
            $match:{
                username: username?.toLowerCase()
            }
        },
        // lookup usename and subcribtion table from channel
        {
            $lookup:{
                from: "subsciptions",
                localField: "_id",
                foreignField: "channel",
                as: "subscibers"
            }
        },

        // lookup usename and subcribtion table from subsciber
        {
            $lookup:{
                from: "subsciptions",
                localField: "_id",
                foreignField: "subsciber",
                as: "subscibersTo"

            }
        },

        // add new colums user table as count  subscibers  and subscibersTo
        {
            $addFields:{
                subcribersCount:{
                    $size:"$subscibers"
                },
                channelsSubscribedToCount: {
                    $size:"$subscibersTo"
                },
                isSubcribed:{
                    $cond:{
                        if: {$in: [req.user?._id, "$subscibers.subsciber"]},
                        then: true,
                        else: false
                    }
                }
            }
        },

        // dada cloums show in api 
        {
            $project:{
                fullname:1,
                username:1,
                subcribersCount:1,
                channelsSubscribedToCount:1,
                isSubcribed:1,
                avatar:1,
                coverImage:1,
                email:1

            }
        }

    ])

    if(!channel?.length){
        throw new ApiError(404,"channel does not exstes")
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200, channel[0],  "User channel fatch succefully")
    )

})


const getWatchHistory = asyncHandler(async (req, res) =>{
    const user = await User.aggregate([
        {
            $match: {
                _id: new mongoose.Types.ObjectId(req.user._id)
            }
        },
        {
            $lookup: {
                from: "videos",
                localField: "watchHistory",
                foreignField: "_id",
                as: "watchHistory",
                pipeline: [
                    {
                        $lookup:{
                            from: "users",
                            localField: "owner",
                            foreignField: "_id",
                            as: "owner",
                            pipeline:[
                                {
                                    $project: {
                                        fullname:1,
                                        username:1,
                                        avatar: 1
                                    }
                                }
                            ]
                            
                        }
                    },
                    {
                        $addFields: {
                            owner: {
                                $first: "$owner"
                            }
                        }
                    }
                ]
            }
        }
    ])

    return res
    .status(200)
    .json(
        new ApiResponse(200,user[0].watchHistory, "Watch history fatch succusfully")
    )
})






export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,
    updateUserAvatar,
    updateUsercoverImage,
    getUserChannelProfile,
    getWatchHistory

}