import express from "express";
import cors from "cors"
import Performancerouter from "../src/routers/performance.router.js"
import connectDB from "./db/connectDB.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"


dotenv.config()

const app = express();


// connect db 

connectDB()


// cousrs
app.use(cors())


// configration 
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())



app.use("/api/products", Performancerouter)



const PORT = process.env.PORT || 4000;
app.listen(PORT,() => console.log(`server running on port ${PORT}`))