import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer"


// mail send verification
export const sendEmail = async ({email,emailType,userId}:any) => {
    try {


        console.log(email,emailType,userId)
        const hashToken = await bcrypt.hash(userId.toString(),10)

        console.log("hashToken",hashToken)

        if(emailType === "VERIFY"){
            await User.findByIdAndUpdate(userId,{
                verifyToken:hashToken,verifyTokenExpiry: Date.now() + 3600000
            })

        }else if(emailType === "RESET") {
             await User.findByIdAndUpdate(userId,{
                forgotPasswordToken:hashToken,forgotPasswordTokenExpiry: Date.now() + 3600000
            })

        }


        // const transporter = nodemailer.createTransport({
        //     host: "smtp.ethereal.email",
        //     port: 587,
        //     secure: false, 
        //     auth: {
        //         user: "maddison53@ethereal.email",
        //         pass: "jn7jnAPss4f63QBp6D",
        //     },
        // });

        const transport = nodemailer.createTransport({
                host: "sandbox.smtp.mailtrap.io",
                port: 2525,
                auth: {
                    user: "51b33767429378",
                    pass: "****ca1a"
                }
                });

        const emailOption = {
                from: 'shubham3211@gmail.com',
                to: email,
                subject: emailType === "VERIFY" ? "VERIFY YOUR EMAILS": "RESET YOUR PASSWORD",
                html: `<p>Click <a href="${process.env.DOMAIN}/verifyEmail?=token${hashToken}">here</a> to ${emailType === "VERIFY" ? "verify your email": "reset your password"} 
                or copy and passt brlow
                 <br> ${process.env.DOMAIN}/verifyEmail?=token${hashToken}
                </p>`
            };

            const mailResonse = await transport.sendMail(emailOption)
            return mailResonse
                    
    } catch (error:any) {
        // console.log(error.message || "somtinfing error")
        throw new Error(error.message || "somting send email error")
        
    }

}
