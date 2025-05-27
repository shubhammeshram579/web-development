import {connectDb} from "@/dbConnect/dbConnect"
import User from "@/models/userModel"
import { NextRequest,NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"



connectDb()


// create user login api
export async function POST(request: NextRequest) {

    try {

        // request body inpute
        const reqBody = await request.json()
        const {email,password} = reqBody
        console.log(reqBody)
        
        // get userFrom Databsase
        const user = await User.findOne({email})


        if(!user){
            throw NextResponse.json({
            error:"user is not found"},{status:400})
        }

        console.log("user check")

        const validpassword = await bcrypt.compare(password, user.password);

        if(!validpassword){
            throw NextResponse.json({
            error:"check your creantial"},{status:400})
        }


        const tokenData = {
            id:user._id,
            username:user.username,
            email: user.email
        }

        const token =  jwt.sign(tokenData, process.env.TOKEN_SECRET! , {expiresIn:"1d"});

        const response = NextResponse.json({
            message:"Logged in succesfully",
            success: true,
        })

        response.cookies.set("token",token ,{
            httpOnly:true
        })

        return response


    } catch (error:any) {

        return  NextResponse.json({error: error.message} ,{status:500})
    }

}