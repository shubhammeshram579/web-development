import mongoose, { isValidObjectId } from "mongoose"
import {Comment} from "../models/comment.model.js"
import {ApiError} from "../utils/apiErrors.js"
import {ApiResponse} from "../utils/apiResponse.js"
import asyncHandler from "..//utils/asynceHendler.js"



const addComment = asyncHandler(async (req, res) => {
    // TODO: add a comment to a video
    try {
        const {content} = req.body;
        const userId = req.user._id;
        const {videoId} = req.params;

        if(!content){
            throw new ApiError(404, "Comment Required")
        }

        const addComments = Comment.create({
            content: content,
            owner: new mongoose.Types.ObjectId(userId),
            video: new mongoose.Types.ObjectId(videoId)

        });

        if(!addComments){
            throw new ApiError(500, "something went wrong");
        };



        return res
        .status(200)
        .json(
            new ApiResponse(200,{addComments: addComments} , "success")
        )
        
    } catch (error) {
        throw new ApiError(400, error.message || "not able to add a comment")
    }
})


const getVideoComments = asyncHandler(async (req, res) => {
    //TODO: get all comments for a video
    const {videoId} = req.params
    const {page = 1, limit = 10} = req.query


    try {
        const allComment = await Comment.aggregate([
            {
                $match: {
                    video: new mongoose.Types.ObjectId(videoId)
                }
            },
            {
                $skip: (parseInt(page) - 1 ) * parseInt(limit),
            },
            {
                $limit: parseInt(limit, 10),
            },
        ]);

        return res
        .status(200)
        .json(
            new ApiResponse(200, {allComment}, "success")
        )
        

    } catch (error) {
        throw new ApiError(400, error.message)
        
    }

})


const getCommentId = asyncHandler( async (req, res) => {
    try {

        const {commentId} = req.params;

        if(!commentId){
            throw new ApiError(200, "commentid not found")
        }


        const getcomments = await Comment.findById(commentId)

        if(!getcomments){
            throw new ApiError(404, "comment is missing")
        }
        
        return res
        .status(200)
        .json(
            new ApiResponse(200, {getcomments}, "comment data get succesfuly")
        )
    } catch (error) {
        throw new ApiError(200, error.message)
        
    }

})


const updateComment = asyncHandler(async (req, res) => {
    // TODO: update a comment
    try {
        const {commentId} = req.params;

        if (!commentId){
            throw new ApiError(400, "commentId is required or invalid")
        }


        const { content } = req.body;
        const trimmedContent = content?.trim();

        if(!trimmedContent){
            throw new ApiError(400, "Comment text is required to update comment");
        }
        


        const comment = await Comment.findByIdAndUpdate(
            commentId,
            {
                $set:{
                    content: trimmedContent,
                }
            },
            {
                new: true
            }
        )


        if(!comment){
            throw new ApiError(500, "Something went wrong while updating comment");
        }

        return res
        .status(200)
        .json(
            new ApiResponse(200, {comment}, "Comment update success")
        );


    } catch (error) {
        throw new ApiError(500, error.message);
      }
   
});

const deleteComment = asyncHandler(async (req, res) => {
    // TODO: delete a comment
    try {
        const {commentId} = req.params;

        const deleteComment = await Comment.findByIdAndDelete(commentId);

        return res
        .status(200)
        .json(
            new ApiResponse(200, {deleteComment}, "file delete succsfully")
        );
        
    } catch (error) {
        throw new ApiError(401, error.message);
        
    }
})

export {
    getVideoComments, 
    addComment, 
    getCommentId,
    updateComment,
    deleteComment
    }