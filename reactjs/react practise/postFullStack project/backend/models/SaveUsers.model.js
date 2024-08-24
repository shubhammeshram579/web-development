import mongoose from "mongoose";


const saveuserSchema = new mongoose.Schema({
    // owner:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:"User",
    //     required: true,
       
    // },
    // user:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:"User",
    //     required: true,

    // },
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  fullName: { type: String, required: true },
  latestMessage: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },

})


export const SaveUsers = mongoose.model("SaveUsers" ,saveuserSchema)