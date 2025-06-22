import {resend} from "@/lib/resend";

import VerificationEmail from "../../emails/verficationEmail";
import { ApiResponse } from "../../types/apiResponse";



export async function sendVerificationEmail(
    email:string,
    username:string,
    verifycode:string

): Promise<ApiResponse>{
    try {
        await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: email,
                subject: 'send resend mail',
                react: VerificationEmail({username,otp:verifycode})
        });
        return {success:true,message:"Verification emaill succesfully"}
    } catch (emailerror) {
        console.error("Error Sending Verification Email",emailerror)
        return {success:false, message:"Faild to send verfication email"}
    }
}