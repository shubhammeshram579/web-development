import {getServerSession} from "next-auth";
import {authOption} from "@/app/api/auth/[...nextauth]/options"
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/user";
import { User } from "next-auth";
import mongoose from "mongoose";


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
    
        const userId = new mongoose.Types.ObjectId(user._id);


        try {

            const user = UserModel.aggregate([
                {$match: {id:userId}},
                {$unwind:'$messages'},
                {$sort: {'messages.createdAt': -1}},
                {$group: {_id: '$_id', messages:{$push:'$message'}}}
            ])

            if(!user){
                return Response.json({
                success:false,
                message: "user not found"
            },{status:401})

            }


            return Response.json({
                success:true,
                message: "succfully get messages"
            },{status:200})

            
        } catch (error) {
             console.log("somting error")
                return Response.json({
                    success:false,
                    message: "error in get error "
                },{status:500})
            
        }
}