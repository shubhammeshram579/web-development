import nodemailer from "nodemailer"


export const sendEmail = async ({email,emailType,userId}:any) => {
    try {

        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "maddison53@ethereal.email",
                pass: "jn7jnAPss4f63QBp6D",
            },
        });

        const emailOption = {
                from: 'shubham321@gmail.com',
                to: email,
                subject: emailType === "VERIFY" ? "VERIFY YOUR EMAILS": "RESET YOUR PASSWORD",
                html: "<b>Hello world?</b>", // HTML body
            };

            const mailResonse = await transporter.sendMail(emailOption)
            return mailResonse
                    
    } catch (error:any) {
        // console.log(error.message || "somtinfing error")
        throw new Error(error.message)
        
    }

}
