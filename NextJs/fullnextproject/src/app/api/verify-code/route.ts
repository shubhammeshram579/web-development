import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/user";
// import {z} from "zod";
// import {usernameValidation} from "@/schemas/signUpSchema";

// code verification api
export async function POST(request:Request){
    await dbConnect()

    try {
        // requred data 
        const {username, code} = await request.json()
        // decodeURIComponent verify username
        const decodedUsername = decodeURIComponent(username)

        // find user from database
        const user = await UserModel.findOne({
            username:decodedUsername
        })

        if(!user){
            return Response.json({
            success:false,
            message:"user not found"
        },{status:500})

        }

        // code verification match 
        const isCodeValid = user.verifycode === code
        // check code is expriry 
        const isCodeNotExpired = new Date(user.verifyCodeExpiry) > new Date()


        if(isCodeValid && isCodeNotExpired){ // check isCodeValid abd isCodeValid true then user updated save
            user.isVerified = true
            await user.save()

            return Response.json({
            success:true,
            message:"Accound verified succesfully"
            },{status:200})

        }else if (!isCodeNotExpired){ //isCodeNotExpired exoriry then get error message 
            return Response.json({
            success:false,
            message:"Verification code has expired please senf again new code "
            },{status:400})

        }else {
            return Response.json({ // both condition are not match then giving code error message
            success:false,
            message:"increact verification code "
            },{status:400})
        }

    } catch (error) {
             console.error("Error verifyd code ", error)
        return Response.json({
            success:false,
            message:"Error cverifyd code"
        },{status:500})
        
    }
}