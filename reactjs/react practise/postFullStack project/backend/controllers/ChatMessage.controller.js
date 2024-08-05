import mongoose from "mongoose";
import {ChatMessage} from "../models/ChatMessage.model.js";
import {ApiError} from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { AsynceHendler } from "../utils/AsynceHendler.js";
import {User} from "../models/User.model.js"



const addChatMessage = AsynceHendler(async (req, res) => {
    
    try {
        const { from, to, message } = req.body;
        
        const sender = await User.findById(from);
        const receiver = await User.findById(to);

        console.log("sender",sender)
        console.log("receiver",receiver)


        if (!sender || !receiver) {
           throw new ApiError(404, "sender and reciver not found ")
        }


        const addMessage = new ChatMessage({ from, to, message });
        await addMessage.save();

        if(!addMessage){
            throw new ApiError(404, "something went error")
        }

        return res
        .status(200)
        .json(
            new ApiResponse(200, {addMessage} , "successfully add")
        )
        
    } catch (error) {
        throw new ApiError(500, error.message)
        
    }
});

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
        const userId = req.user._id;

        if(!userId){
            throw new ApiError(404, "user id not found")
        }

        const fromuserChat = await ChatMessage.find({from: userId}).populate("from");
        console.log("fromuserChat",fromuserChat)

        if(!fromuserChat){
            throw new ApiError(404, "chat not found");
        }
        
        return res
        .status(200)
        .json(
            new ApiResponse(200 ,{fromuserChat} ,"success")
        )
    } catch (error) {
        throw new ApiError(500, error.message)
        
    }

})

const toUserChatMessage = AsynceHendler( async (req, res) =>{
    try {
        // const userId = req.user._id;
        const {to} = req.query;

        if(!to){
            throw new ApiError(404, "user id not found")
        }

        const touserChat = await ChatMessage.find({to});

        if(!touserChat){
            throw new ApiError(404, "chat not found");
        }
        
        return res
        .status(200)
        .json(
            new ApiResponse(200 ,{touserChat} ,"success")
        )
    } catch (error) {
        throw new ApiError(500, error.message)
        
    }

})


const getChatMessagesToUser = AsynceHendler(async (req, res) => {
    try {
        const { to } = req.body;

        const receiver = await User.findById(to);

        if (!receiver) {
            throw new ApiError(404, "Receiver not found");
        }

        const messagesToUser = await ChatMessage.find({ to });

        return res
            .status(200)
            .json(new ApiResponse(200, { messages: messagesToUser }, "Messages retrieved successfully"));
    } catch (error) {
        throw new ApiError(500, error.message);
    }
});




export {
    addChatMessage,
    getchat,
    fromChatMessage,
    toUserChatMessage,
    getChatMessagesToUser

}