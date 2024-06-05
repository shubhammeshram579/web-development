import mongoose, {isValidObjectId} from "mongoose"
import {Like} from "../models/like.model.js"
import {ApiError} from "../utils/apiErrors.js"
import {ApiResponse} from "../utils/apiResponse.js"
import asyncHandler from "../utils/asynceHendler.js"
import { User } from "../models/user.models.js"

const toggleVideoLike = asyncHandler(async (req, res) => {
    const {videoId} = req.params
    //TODO: toggle like on video
    const userId = req.user._id.toString();

    try {
        const  condition = { LikedBy: userId, video: videoId }
        const comment =  await Like.findOne(condition)

        if(!comment){
            const createLike = await Like.create(condition);

            return res
            .status()
            .json(
                new ApiResponse(200, {createLike}, "success")
            )
        }else{

            const removeLike = await Like.findByIdAndDelete(condition)

            return res
            .status(200)
            .json(
                new ApiResponse(200, {removeLike} , "success")
            )
        }
        
    } catch (error) {
        throw new ApiError(500, error.message)
        
    }
})

const toggleCommentLike = asyncHandler(async (req, res) => {
    const {commentId} = req.params
    //TODO: toggle like on comment
    const userId = req.user._id.toString();
    try {

        const condition = {LikedBy: userId, comment: commentId};
        const comment = await Like.findOne(condition);

        if(!comment){
            const createLike = await Like.findOne(condition);

            return res
            .status(200)
            .json(
                new ApiResponse(200, {createLike} , "success")
            )
        }else{

            const removeLike = await Like.findByIdAndDelete(condition)
            return res
            .status(200)
            .json(
                new ApiResponse(200, {removeLike} , "success")
            )

        }
        
    } catch (error) {
        throw new ApiError(401, error.massage)
        
    }


})

const toggleTweetLike = asyncHandler(async (req, res) => {
    const {tweetId} = req.params
    //TODO: toggle like on tweet
    const userId = req.user._id;
    const tweetsrt = userId.toString();
    try {

        const condition = {LikedBy: tweetsrt, tweet: tweetId};
        const like = await Like.findOne(condition);

        if(!like){
            const createLike = await Like.findOne(condition);

            return res
            .status(200)
            .json(
                new ApiResponse(200, {createLike} , "Liked created succesfully")
            )

        }else{

            const removeLike = await Like.findByIdAndDelete(condition)
            return res
            .status(200)
            .json(
                new ApiResponse(200, {removeLike} , "success")
            )

        }
        
    } catch (error) {
        throw new ApiError(401, error.massage)
        
    }
}
)

const getLikedVideos = asyncHandler(async (req, res) => {
    //TODO: get all liked videos
    const userId = req.user._id.toString();
    try {
        const allLiked = await Like.find(
            {
                LikedBy: userId,
                video: {$exists: true}
            }
        );

        return res
        .status(200)
        .json(
            new ApiResponse(200, {allLiked} , "get all videos likes")
        )
    } catch (error) {
        throw new ApiError(401, error.massage)

        
    }
})

export {
    toggleCommentLike,
    toggleTweetLike,
    toggleVideoLike,
    getLikedVideos
}