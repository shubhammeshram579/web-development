import asyncHandler from "../Utils/asyncHandler.js"
import {ApiError} from "../Utils/apiErrors.js" 
import {ApiResponse} from "../Utils/apiResponse.js"
import {User} from "../Models/User.Model.js"


const HomeRoter = asyncHandler((req,res) => {
    try {
        let homRou = "hello shubham"

        return res.status(201).json( homRou)
    } catch (error) {
        console.log(error.message || "somthing went wrong")
    }

})
export {
    HomeRoter

}