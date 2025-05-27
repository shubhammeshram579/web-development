import {connectDb} from "@/dbConnect/dbConnect"
import User from "@/models/userModel"
import { NextRequest,NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import {sendEmail} from "@/helper/mailer"



connectDb()


// create user register api
export async function POST(request: NextRequest) {

    try {
        // request body inpute
        const reqBody = await request.json()
        const {username,email,password} = reqBody
        console.log(reqBody)

        // get userFrom Databsase
        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({error:"user is allready login"},{status:400})
        }
        

        // handel brecrpt for password text genranter
        const salt = await bcrypt.genSalt(10);
        console.log("salt",salt)

        // create password
        const hasedPasseword = await bcrypt.hash(password,salt)
        console.log("hasedPasseword",hasedPasseword)

        const newUser = new User({
            username,
            email,
            password: hasedPasseword
        })

        // save user details
        const savedUser = await newUser.save();
        console.log("savedUser",savedUser)


        // handel send email verification
        await sendEmail({email,emailType:"VERIFY",userId:savedUser._id})


        return NextResponse.json({
            message:"User register succecfully",
            success: true,
            savedUser
        })

    } catch (error:any) {

        return  NextResponse.json({error: error.message} ,{status:500})
    }

}