import express from "express"
import User from "../models/User"



const router = express.Router()


router.post("/",(req,res) => {

    console.log("hellow")

})



export default router