import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"



const app = express()

// app.use(cors({
//     origin:process.env.CORS_ORIGIN, // Replace with your frontend URL
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//   }));

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

app.use(cors());



// router import
import userrouter from "./routers/User.route.js";
import userPost from "./routers/Post.route.js";
import comment from "./routers/Comment.route.js"
import notification from "./routers/Notification.route.js"
import addChatMessage from "./routers/ChatMessage.route.js"

// console.log(userrouter)

// router declation 
app.use("/api" , userrouter)
app.use("/api", userPost)
app.use("/api", comment)
app.use("/api", notification)
app.use("/api", addChatMessage)


console.log("ACCESS_TOKEN_SECRET:", process.env.ACCESS_TOKEN_SECRET);


export {app}


