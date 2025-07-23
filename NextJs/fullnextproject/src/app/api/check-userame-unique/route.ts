import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/user";
import {z} from "zod";
import {usernameValidation} from "@/schemas/signUpSchema";


// set zod inpute validation 
const UsernameQuerySchema = z.object({
    username: usernameValidation
})

// get API for check username verified check 
export async function GET(request:Request){
    await dbConnect()

    try {
        // get req from url with params
        const {searchParams} = new URL(request.url)

        // queryParam to get username
        const queryParam = {
            username: searchParams.get("username")
        }
        
        // validatin check with zod
        const result  = UsernameQuerySchema.safeParse(queryParam)

        console.log("result",result)

        // handing error if result not get 
        if(!result.success){
            const usernameErrors = result.error.format().username?._errors || []
            return Response.json({
                success:false,
                message:usernameErrors?.length > 0 ? usernameErrors.join(", ") : "Invalid query parameters"
            },{status:400})
        }

        const {username} = result.data

        // check with databases user is existed 
       const exstingVerifedUser = await UserModel.findOne({
            username,isVerified: true
        })

        // check user is verified or not
        if(exstingVerifedUser){
            return Response.json({
                success:false,
                message: "Username is allready taken"
            },{status:400})
        }

    } catch (error) {
        console.error("Error checking username", error)
        return Response.json({
            success:false,
            message:"Error cheking username"
        },{status:500})
        
    }
}
