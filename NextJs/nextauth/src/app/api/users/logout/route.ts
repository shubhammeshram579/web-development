import {connectDb} from "@/dbConnect/dbConnect"
import { NextRequest,NextResponse } from "next/server"


connectDb()


// create user logout api
export async function GET(request: NextRequest) {

    try {

        const response = NextResponse.json({
            message:"user logout succesfully",
            success:true
        })

        response.cookies.set("token","",{
            httpOnly:true,
            expires: new Date(0)
        })

        return response


    } catch (error:any) {

        return  NextResponse.json({error: error.message} ,{status:500})
    }

}