import express from "express"
import cors from "cors"
import connectDB from "./DB/ConnectDb.js"

const app = express()

connectDB();

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
import userrouter from "./Router/userRound.js"


// route declaration
app.use("/api/v1/users" , userrouter)

export {app}