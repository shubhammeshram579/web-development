import express from "express"
import cors from "cors"
import connectDB from "./DB/ConnectDb.js"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"

const app = express()

connectDB();

dotenv.config();

// cousrs
app.use(cors({
  origin:process.env.CORS_ORIGIN,
  credentials:true
}))


// configration 
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


// router import 
import HomeRouter from "./Router/HomeRouter.js"
import userrouter from "./Router/userRound.js"


// route declaration
app.use("/" , HomeRouter)
app.use("/api/v1/users" , userrouter)


var PORT = process.env.PORT || 5000
app.listen(PORT,() => {console.log(`server listen on ${PORT}`)});

export {app}