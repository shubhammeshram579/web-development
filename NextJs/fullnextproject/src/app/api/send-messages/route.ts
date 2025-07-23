import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/user";

import {Message} from "@/models/user"


export async function POST(request:Request){
    await dbConnect()

    const {username,content} = await request.json()


    try {

        const user = await UserModel.findOne({username})

        if(!user){
            return Response.json({
                success:false,
                message: "user is not found"
            },{status:404})
        }

        if(!user.isAcceptingMessage){
            return Response.json({
                success:false,
                message: "user is not accepting messages"
            },{status:403})
        }


        const newMessage = {content,createAt:new Date()}

        user.message.push(newMessage as Message)

        await user.save()


        return Response.json({
                success:true,
                message: "messages send succefully"
        },{status:200})

    } catch (error) {
        console.log("unaspected error")
        return Response.json({
            success:false,
            message: "send messages error "
        },{status:500})
        
    }

}