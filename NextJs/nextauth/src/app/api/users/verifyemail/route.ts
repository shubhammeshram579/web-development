import {connectDb} from "@/dbConnect/dbConnect"
import User from "@/models/userModel"
import { NextRequest,NextResponse } from "next/server"

connectDb()

export async function POST(request: NextRequest){
    try {
        
        const reqBody = await request.json()
        const {token} = reqBody

        console.log("token",token)

        const user = await User.findOne({verifyToken:token,verifyTokenExpiry: {$gt: Date.now()}})

        if(!user){
            throw NextResponse.json({
                error:"invalid users"},{status:400})
        }

        user.isVerified = true
        user.verifyToken = undefined
        user.verifyTokenExpiry = undefined

        await user.save()


        return NextResponse.json({
            message:"email verification succecfully",
            success: true,
                    
        },{status:200})



    } catch (error:any) {
        return  NextResponse.json({error: error.message} ,{status:500})
        
    }
}