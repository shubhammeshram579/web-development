import {getServerSession} from "next-auth";
import {authOption} from "@/app/api/auth/[...nextauth]/options"
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/user";
import { User } from "next-auth";


export async function POST(request:Request) {
    await dbConnect()

    const session = await getServerSession(authOption)
    const user: User = session?.user as User

    if(!session || !session.user){
        return Response.json({
            success:false,
            message: "Not Authection"
        },{status:401})

    }

    const userId = user._id;
    const {acceptMessages} = await request.json()

    try {

        

        const updatedUser = await UserModel.findByIdAndUpdate(
            userId,
            {isAcceptingMessage:acceptMessages},
            {new:true}
        )

        if(!updatedUser){
             return Response.json({
            success:false,
            message: "faild to updated user status to accept message "
        },{status:400})
    }   



        return Response.json({
            success:true,
            message: "message accepting  updated user status to accept succefully",
            updatedUser
        },{status:200})
        
    } catch (error) {
        console.log("faild to updated user status to accept message")
        return Response.json({
            success:false,
            message: "aild to updated user status to accept message "
        },{status:500})
        
    }
}



export async function GET(request:Request){
     await dbConnect()

    const session = await getServerSession(authOption)
    const user: User = session?.user as User

    if(!session || !session.user){
        return Response.json({
            success:false,
            message: "Not Authection"
        },{status:401})

    }

    const userId = user._id;
    const {acceptMessages} = await request.json()

    try {
        const foundUser = await UserModel.findById(userId)


            if(!foundUser){
                    return Response.json({
                        success:false,
                        message: "userNot found "
                      
                    },{status:404})
            }   


            return Response.json({
                success:true,
                isAcceptingMessages: foundUser.isAcceptingMessage
            },{status:200})

        
    } catch (error) {
         console.log("faild to updated user status to accept message")
        return Response.json({
            success:false,
            message: "error in get error "
        },{status:500})
        
    }

}