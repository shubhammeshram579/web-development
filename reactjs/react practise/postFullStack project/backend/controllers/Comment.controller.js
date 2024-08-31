import mongoose from "mongoose";
import {Comment} from "../models/Comment.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { AsynceHendler } from "../utils/AsynceHendler.js";


const addComment = AsynceHendler(async (req, res)=>{
    try {
        const {content} = req.body;
        const userId = req.user._id;
        const postId = req.params


        if(!userId){
            throw new ApiError(404, "user id not found")
        }

        const addComment  = await Comment.create({
            content:content,
            owner:userId,
            post:postId,
        });

        if(!addComment){
            throw new ApiError(404, "comment not created")
        }

        return res
        .status(200)
        .json(
            new ApiResponse(200, {addComment}, "susscefully add comment")
        )
        
    } catch (error) {
        throw new ApiError(404, error.message)
        
    }
});

const getComment = AsynceHendler(async (req,res) =>{
    try {
        const commentId = req.params;
        console.log(commentId)

        if(!commentId){
            throw new ApiError(404, "commentId not found")
        }

        const getComment = await Comment.findById(commentId);

        if(!getComment){
            throw new ApiError(404, "comment not found")
        }


        return res
        .status(200)
        .json(
            new ApiResponse(200,{getComment} , "susses")
        )
        
    } catch (error) {
        throw new ApiError(404, error.message)
        
    }

})

const getCommentByOwner = AsynceHendler( async (req, res)=>{
try {
    
        // const postId = req.params;
    
        const getcomment = await Comment.find({post:req.params.postId}).populate("owner","email fullname")
        console.log(getcomment)
    
        if(!getComment.length){
            throw new ApiError(404, "post comment not found")
        }
    
        return res
        .status(200)
        .json(
            new ApiResponse(200,{getcomment},"success")
        )
} catch (error) {
    throw new ApiError(500, error.message)

    
}

    
})


export {
    addComment,
    getComment,
    getCommentByOwner

}