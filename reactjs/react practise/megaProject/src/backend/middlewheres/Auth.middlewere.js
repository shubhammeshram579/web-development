import {ApiError} from "../utils/ApiError.js"
import {AsynceHendler} from "../utils/AsynceHendler.js"
import jwt from "jsonwebtoken"
import {User} from "../models/User.model.js"


export const verifyJWT = AsynceHendler( async (req, res, next) =>{
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
        throw new ApiError(401 , "invalid acces token")
    }


    req.user = user;
    next()
    
} catch (error) {
    throw new ApiError(401, error?.message || "invalid acces token")

    
}
})