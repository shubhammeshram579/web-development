import {Message} from "@/models/user"

export interface ApiResponse{
    success:boolean;
    message:string;
    isAccespetingMessages?: boolean;
    messages?:Array<Message>
}