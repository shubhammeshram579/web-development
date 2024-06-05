import mongoose, {isValidObjectId} from "mongoose"
import {User} from "../models/user.models.js"
import {Subscription}  from "../models/subscription.model.js"
import {ApiError} from "../utils/apiErrors.js"
import {ApiResponse} from "../utils/apiResponse.js"
import asyncHandler from "../utils/asynceHendler.js"


const toggleSubscription = asyncHandler(async (req, res) => {
    const {channelId} = req.params
    // TODO: toggle subscription
    const userId = req.user._id;
    try {

        const conditions = {subsciber: new mongoose.Types.ObjectId(userId), channel: new mongoose.Types.ObjectId(channelId)};
        const subscribed = await Subscription.findOne(conditions);


        if(!subscribed){
            const createSubcription = await Subscription.create(conditions);

            return res
            .status(200)
            .json(
                new ApiResponse(200, {createSubcription},"subcribed")
            )
        }else{
            const deleteSubcription = await Subscription.findByIdAndDelete(conditions);

            return res
            .status(200)
            .json(
                new ApiResponse(200, {deleteSubcription}, "subcription")
            )

        }
        
    } catch (error) {
        throw new ApiError(400, error.message);
        
    }
});





// controller to return subscriber list of a channel
const getUserChannelSubscribers = asyncHandler(async (req, res) => {
    try {
        const {subscriberId} = req.params;
        const subcribber = await Subscription.find({
            channel: new mongoose.Types.ObjectId(subscriberId)
        });

        return res
        .status(200)
        .json(
            new ApiResponse(200, {subcribber} , "succes")
        )
        
    } catch (error) {
        throw new ApiError(400, error.message)
        
    }
});





// controller to return channel list to which user has subscribed
const getSubscribedChannels = asyncHandler(async (req, res) => {
    const { channelId } = req.params;
    try {
        const subscribber = await Subscription.find({
            subscriber: new mongoose.Types.ObjectId(channelId),
        });

        return res
        .status(200)
        .json(new ApiResponse(200, { subscribber }, "Success"));
        
    } catch (error) {
        throw new ApiError(400, error.message)
        
    }
})

export {
    toggleSubscription,
    getUserChannelSubscribers,
    getSubscribedChannels
}