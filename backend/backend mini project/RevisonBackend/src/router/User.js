import express from "express"
import {User} from "../models/UserModels.js"
const router = express.Router();


router.get("/home" , async (req,res) => {
       try {
         const {email,username,password} = req.body
 
       const user =  await User.find({email:email,username:username,password:password})
 
       if(!user){
         console.log("somting error");
       }
 
       return res.status(200).json(
         console.log({user},"succesfully")
       )
       } catch (error) {
        console.log("somting error")
        
       }

})

export default router