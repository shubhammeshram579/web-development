import mongoose ,{Schema} from "mongoose";


const subsciptionSchema = new Schema({
    subsciber:{
        type: Schema.Types.ObjectId, //one who is subcribing
        ref: "User"
    },
    channel:{
        type: Schema.Types.ObjectId, // one to whom "subcripber" is subcripbing
        ref: "User"
    }

},{timestamps:true})


export const Subsciption = mongoose.model("Subsciption",subsciptionSchema)