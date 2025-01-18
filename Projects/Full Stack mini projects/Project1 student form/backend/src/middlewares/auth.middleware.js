import asyncHandler from "../Utils/asyncHandler.js"
import {ApiError} from "../Utils/apiErrors.js" 
import {ApiResponse} from "../Utils/apiResponse.js"
import {User} from "../Models/User.Model.js"
import jwt from "jsonwebtoken"

export const verifyJWT = asyncHandler(async (req,_,next) => {
    try {
        const token = req.cookies?.accessToken || req.headers["Authorization"]?.replace("Bearer ", "");

        console.log(token)

        
        if(!token){
            throw new ApiError(401, "Unauthorized requrest")
    
        }

        
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
        const user = await User.findById(decodedToken?._id).select(
            "-password -refreshToken"
        )
    
        if(!user){
            // next video: discuss nex
            throw new ApiError(401, "Invalid Access Token")
        }
    
        req.user = user;
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "invalid access token")
        
    }

})