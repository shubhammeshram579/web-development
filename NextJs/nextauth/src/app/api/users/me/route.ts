import { NextRequest,NextResponse } from "next/server";
import { getDataFromToken } from "@/helper/getdatatoken";
import User from "@/models/userModel";
import {connectDb} from "@/dbConnect/dbConnect"

connectDb()

export async function GET(request:NextRequest) {
    try {
        const userID = await getDataFromToken(request)
        const user = await User.findOne({_id: userID}).select("-password")
        

        if(!user){
            throw NextResponse.json({
                error:"invalid users"},{status:400})
        }

        return NextResponse.json({
            message: "user detail get succefully",
            success: true,
            data: user
        })

    } catch (error:any) {
        throw new Error(error.message)
        
    }

}