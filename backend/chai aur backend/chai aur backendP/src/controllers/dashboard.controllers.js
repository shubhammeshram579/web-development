import mongoose from "mongoose"
import {Video} from "../models/video.models.js"
import {Subscription} from "../models/subscription.model.js"
import {Like} from "../models/like.model.js"
import {ApiError} from "../utils/apiErrors.js"
import {ApiResponse} from "../utils/apiResponse.js"
import asyncHandler from "../utils/asynceHendler.js"

const getChannelStats = asyncHandler(async (req, res) => {
    // TODO: Get the channel stats like total video views, total subscribers, total videos, total likes etc.

    try {
        const { userId } = req.params;
        const videoData = await Video.aggregate([
          {
            $match: {
              owner: new mongoose.Types.ObjectId(userId),
            },
          },
          {
            $lookup: {
              from: "Likes",
              localField: "_id",
              foreignField: "video",
              as: "Likes",
            },
          },
          {
            $addFields: {
              likes: {
                $size: { $ifNull: ["$likes", []] },
              },
            },
          },
          {
            $lookup: {
              from: "subsciber",
              localField: "owner",
              foreignField: "channel",
              as: "subsciber",
            },
          },
          {
            $addFields: {
              subscriber: {
                $size: { $ifNull: ["$subsciber", []] },
              },
            },
          },
          {
            $group: {
              _id: null,
              totalViews: {
                $sum: "$views",
              },
              totalVideos: {
                $sum: 1,
              },
    
              totalLikes: {
                $sum: "$likes",
              },
            },
          },
          {
            $project: {
              _id: 0,
              owner: 0,
            },
          },
        ]);
    
        return res.status(200).json(new ApiResponse(200, { videoData }, "Success"));
    } catch (e) {
        throw new ApiError(400, e.message);
    }
});
    

const getChannelVideos = asyncHandler(async (req, res) => {
    // TODO: Get all the videos uploaded by the channel
    const { userId } = req.params;
  try {
    const allVideos = await Video.find({
      owner: new mongoose.Types.ObjectId(userId),
    }).count();


    if (!allVideos) throw new ApiError(404, "No videos available");

    return res
    .status(200)
    .json(
        new ApiResponse(200, { allVideos }, "Success")
    );

  } catch (e) {
    throw new ApiError(400, e.message || "Some error occurred");
  }
})

export {
    getChannelStats, 
    getChannelVideos
    }