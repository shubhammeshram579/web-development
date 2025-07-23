import {getServerSession} from "next-auth";
import {authOption} from "@/app/api/auth/[...nextauth]/options"
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/user";
import { User } from "next-auth";


export async function DELETE(request:Request ,{params}: {params: {messageId:string}}){
     await dbConnect()

     const messageId = params.messageId
    
        const session = await getServerSession(authOption)
        const user: User = session?.user as User
    
        if(!session || !session.user){
            return Response.json({
                success:false,
                message: "Not Authection"
            },{status:401})
    
        }


        try {

           const updateResult =  await UserModel.updateOne(
                {_id:user._id},
                {$pull:{message:{_id:messageId}}}
            )
            

            if(updateResult.modifiedCount == 0){
                return Response.json({
                success:false,
                message: "message is not founsd"
            },{status:404})
            }
            console.log("updateResult",updateResult)

             return Response.json({
                success:true,
                message: "succesfuly delete messages"
            },{status:200})

          
        } catch (error) {
             console.log("somting error")
                return Response.json({
                    success:false,
                    message: "error in get error "
                },{status:500})
            
        }
}