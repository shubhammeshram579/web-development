import mongoose from "mongoose";
import {ChatMessage} from "../models/ChatMessage.model.js";
import {ApiError} from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { AsynceHendler } from "../utils/AsynceHendler.js";
import {User} from "../models/User.model.js"



const addChatMessage = AsynceHendler(async (req, res) => {
    
    try {
        const { from, to, message } = req.body;
        
        // const sender = await User.findById(from);
        // const receiver = await User.findById(to);

        // console.log("sender",sender)
        // console.log("receiver",receiver)


        // if (!sender || !receiver) {
        //    throw new ApiError(404, "sender and reciver not found ")
        // }


        const newMessage = new ChatMessage({ from, to, message, createdAt: new Date(), });
        await newMessage.save();

        if(!newMessage){
            throw new ApiError(404, "something went error")
        }

        return res
        .status(200)
        .json(
            new ApiResponse(200, {newMessage} , "successfully add")
        )
        
    } catch (error) {
        throw new ApiError(500, error.message)
        
    }
});

// chat create 2 router
const messagesend = AsynceHendler( async (req,res) => {
    try {
        const { from, to, message } = req.body;

        if (!from || !to || !message) {
            throw new ApiError(400, 'All fields are required');
        }

        const newChatMessage = new ChatMessage({ from, to, message });
        await newChatMessage.save();

        return res.status(201).json(
            new ApiResponse(201, newChatMessage, 'Message sent successfully')
        );
    } catch (error) {
        throw new ApiError(500, error.message);
    }

})


const getchat = AsynceHendler(async (req, res) => {
    try {

        const getchats = await ChatMessage.find({});
        
        if(!getchats){
            throw new ApiError(404, "chat not fund")
        }

        return res
        .status(200)
        .json(
            new ApiResponse(200 , {getchats} , "success")
        )
        
    } catch (error) {
        throw new ApiError(500, error.message)
        
    }

});


const fromChatMessage = AsynceHendler( async (req, res) =>{
    try {
        const from = req.user._id;
        const {to} = req.params;

        if(!from || !to){
            throw new ApiError(404, "user id not found")
        }

        const fromuserChat = await ChatMessage.find({from: from});
        console.log("fromuserChat",fromuserChat)

        const toUserChat = await ChatMessage.find({ to: to });
        console.log("toUserChat",toUserChat)

        if(!fromuserChat.length && !toUserChat.length){
            throw new ApiError(404, "chat not found");
        }
        
        return res
        .status(200)
        .json(
            new ApiResponse(200 ,{fromuserChat,toUserChat} ,"success")
        )
    } catch (error) {
        throw new ApiError(500, error.message)
        
    }

})




// const toUserChatMessage = AsynceHendler( async (req, res) =>{
//     try {
//         // const userId = req.user._id;
//         // const {to} = req.query;
//         const {userId} = req.params;

//         if(!userId){
//             throw new ApiError(404, "user id not found")
//         }

//         const touserChat = await ChatMessage.find({from: userId});

//         if(!touserChat){
//             throw new ApiError(404, "chat not found");
//         }
        
//         return res
//         .status(200)
//         .json(
//             new ApiResponse(200 ,{touserChat} ,"success")
//         )
//     } catch (error) {
//         throw new ApiError(500, error.message)
        
//     }

// })


// const getChatMessagesToUser = AsynceHendler(async (req, res) => {
//     try {
//         const { to } = req.body;

//         const receiver = await User.findById(to);

//         if (!receiver) {
//             throw new ApiError(404, "Receiver not found");
//         }

//         const messagesToUser = await ChatMessage.find({ to });

//         return res
//             .status(200)
//             .json(new ApiResponse(200, { messages: messagesToUser }, "Messages retrieved successfully"));
//     } catch (error) {
//         throw new ApiError(500, error.message);
//     }
// });



const fromAndTo = AsynceHendler(async (req, res) =>{
    try {
        const {from , to } = req.params;

        const chatMessages = await ChatMessage.find({
            $or:[
                {from, to},
                {from: to , to: from}
            ]
        }).sort({createdAt:1});

        console.log(chatMessages)

        return res
        .status(200)
        .json(
            new ApiResponse(200, {chatMessages} , "succefully")
        )
        
    } catch (error) {
        throw new ApiError(500, error.message)
        
    }

});



const chatNotification = AsynceHendler(async (req, res) => {
    try {
        // const userId = req.query.userId;
        const userId = req.user._id;

        const chatNotify = await ChatMessage.find({to: userId , isRead: false}).sort({createdAt:-1}).populate("from")

        return res
        .status(200)
        .json(
            new ApiResponse(200, {chatNotify} , "succefully")
        )
    } catch (error) {
        throw new ApiError(500, error.message)
        
    }

});

// read chat

const readChat = AsynceHendler( async (req, res) =>{
    try {

        const {from , to} = req.params;

        const readchat = await ChatMessage.updateMany(
            {from, to, isRead: false},
            {$set: {isRead: true}}
        )


        return res
        .status(200)
        .json(
            new ApiResponse(200, {readchat} , "succefully")
        )
    } catch (error) {
        throw new ApiError(500, error.message)
        
    }

})







export {
    addChatMessage,
    messagesend,
    getchat,
    fromChatMessage,
    fromAndTo,
    chatNotification,
    readChat
    // toUserChatMessage,
    // getChatMessagesToUser,
    

}