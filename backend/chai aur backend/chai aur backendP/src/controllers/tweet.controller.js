import mongoose, { isValidObjectId } from "mongoose"
import {Tweet} from "../models/tweet.model.js"
import {User} from "../models/user.models.js"
import {ApiError} from "../utils/apiErrors.js"
import {ApiResponse} from "../utils/apiResponse.js"
import asyncHandler from "../utils/asynceHendler.js"

const createTweet = asyncHandler(async (req, res) => {
    //TODO: create tweet
    try {

        const {content} = req.body;
        const userId = req.user._id;

        if(!content){
            throw new ApiError(200, "content is missing")
        }

        const addtweet = await Tweet.create(
            {
                content: content,
                owner: new mongoose.Types.ObjectId(userId),
            }
            
        )

        if(!addtweet){
            throw new ApiError(404 , "somthing went rwong")
        }

        return res
        .status(200)
        .json(
            new ApiResponse(200, {addtweet} , "success")
        )
        
    } catch (error) {
        throw new ApiError(404, error.message)
        
    }
})

const getAlltweets = asyncHandler(async (req, res) =>{
    try {
        // const userId = req.user._id;
    
        // if(!userId){
        //     throw new ApiError(400, "userId is missing")
        // }
    
        const getAlltweets = await Tweet.find();
    
        if(!getAlltweets){
            throw new ApiError(400, "userId is missing")
        }
    
        return res
        .status(200)
        .json(
            new ApiResponse(200, {getAlltweets}, "getall tweets succesfuly")
        )
    } catch (error) {
        throw new ApiError(404, error.message)
        
    }


})

const getUserTweets = asyncHandler(async (req, res) => {
    // TODO: get user tweets
    try {
        const {tweetId} = req.params;

        if(!tweetId){
            throw new ApiError(404, "content id is missing")
        }

        const gettweetcontent = await Tweet.findById(tweetId)

        if(!gettweetcontent){
            throw new ApiError(400 , "constent is missing")
        }

        return res
        .status(200)
        .json(
            new ApiResponse(200, {gettweetcontent} , "all tweet get succesfuly")
        )
        
    } catch (error) {
        throw new ApiError(404, error.message)
    }
})

// const updateTweet = asyncHandler(async (req, res) => {
//     //TODO: update tweet
// })

const updateTweet = asyncHandler(async (req, res) => {
    // TODO: update a comment
    try {
        const {tweetId} = req.params;

        if (!tweetId){
            throw new ApiError(400, "tweetId is required or invalid")
        }


        const { content } = req.body;
        const trimmedContent = content?.trim();

        if(!trimmedContent){
            throw new ApiError(400, "content text is required to update comment");
        }
        


        const tweetsContent = await Tweet.findByIdAndUpdate(
            tweetId,
            {
                $set:{
                    content: trimmedContent,
                }
            },
            {
                new: true
            }
        )


        if(!tweetId){
            throw new ApiError(500, "Something went wrong while updating comment");
        }

        return res
        .status(200)
        .json(
            new ApiResponse(200, {tweetsContent}, "tweets update success")
        );


    } catch (error) {
        throw new ApiError(500, error.message);
      }
   
});

const deleteTweet = asyncHandler(async (req, res) => {
    //TODO: delete tweet
    try {
        const {tweetId} = req.params;

        if(!tweetId){
            throw new ApiError(400, "connteid is missing")
        }

        const deleteConntet = await Tweet.findByIdAndDelete(tweetId)

        return res
        .status(200)
        .json(
            new ApiResponse(200, {deleteConntet}, "tweet deleted succesfully")
        )
        
    } catch (error) {
        throw   new ApiError(400, error.message)
        
    }
})

export {
    createTweet,
    getUserTweets,
    updateTweet,
    deleteTweet,
    getAlltweets
}