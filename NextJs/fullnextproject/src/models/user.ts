import mongoose, {Schema,Document} from "mongoose";

// typeScript interface
export interface Message extends Document{
    content: string;
    createAt: Date
}



const MessageSchema:Schema<Message> = new Schema({
    content: {
        type: String,
        required:true,
    },
    createAt:{
        type:Date,
        required:true,
        default: Date.now
    },

})

// typeScript interface
export interface User extends Document{
    username:string;
    email:string;
    password:string;
    verifycode:string;
    isVerified:boolean;
    verifyCodeExpiry:Date;
    isAcceptingMessage:boolean;
    message: Message[]

}



const UserSchema:Schema<User> = new Schema({
    username: {
        type: String,
        required:[true, "UserName is required"],
        unique:true
    },
    email: {
        type: String,
         required:[true, "Email is required"],
         unique:true
    },
    password: {
        type: String,
        required:[true, "password is required"],
    },
    verifycode: {
        type: String,
        required:[true, "password is required"],
    },
    isVerified: {
        type: Boolean,
        default:false,
    },
    verifyCodeExpiry:{
        type:Date,
        required:[true, "verifyCodeExpiry is required"],
    },
    isAcceptingMessage:{
       type: Boolean,
        default:true,
    },
    message:[MessageSchema]


})


const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema)

export default UserModel;