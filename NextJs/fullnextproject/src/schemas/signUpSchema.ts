import {z} from "zod";
import { email } from "zod/v4";


export const usernameValidation = z
.string()
.min(2, "username must be atleast 2 characters")
.max(20, "username must be no more than 20 characters")
.regex(/^[a-zA-Z0-9_]+$/, "username must not contain special character")


export const signUpShema = z.object({
    username: usernameValidation,
    email: z.string().email({message:"invaild email address"}),
    password: z.string().min(6,{message:"password must be at least 6 characters"})
})

