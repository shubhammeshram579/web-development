import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/user";
import bcrypt from "bcryptjs";


import { sendVerificationEmail } from "@/helpers/sendVerificationEmails";





export async function POST(request:Request){
    await dbConnect()

    try {
       const {username,email,password} =  await request.json()
       const existingUserVerifiedVyUserName = await UserModel.findOne({
        username,
        isVerified:true
       })

       if(existingUserVerifiedVyUserName){
        return Response.json({
            success:false,
            message:"username is already taken"
        },{status:400})
       }

       const existingUserByEmail = await UserModel.findOne({email})
       const verifycode = Math.floor(100000 + Math.random() * 900000).toString()


       if(existingUserByEmail){
        if(existingUserByEmail.isVerified){
            return Response.json({
                success:false,
                message:"user already exist with this email"
            },{status:400})

        }else{
            const hashPassword = await bcrypt.hash(password,10)
            existingUserByEmail.password = hashPassword;
            existingUserByEmail.verifycode = verifycode;
            existingUserByEmail.verifyCodeExpiry = new Date(Date.now() + 3600000)
            await existingUserByEmail.save()
        }
       }else{
            const hasedPassword = await bcrypt.hash(password,10)
            const expriDate = new Date()
            expriDate.setHours(expriDate.getHours() + 1)


           const newUser =  new UserModel({
                    username,
                    email,
                    password,
                    verifycode,
                    isVerified:false,
                    verifyCodeExpiry:expriDate,
                    isAcceptingMessage:true,
                    message: []

            })
            await newUser.save()

       }

    //    send vefificationEmail 

    const emailResponse = await sendVerificationEmail(email,username,verifycode)

    if(!emailResponse.success){
        return Response.json({
            success:false,
            message:emailResponse.message
            
        },{status:500})
    }

    return Response.json({
            success:true,
            message:"user succefuly register verification email"
            
        },{status:201})


    } catch (error) {
        console.error("error registing error")
        return Response.json(
            {
                success:false,
                message: "error registrr user"
            }
        )
        
    }
}