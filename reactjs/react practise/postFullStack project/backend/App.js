import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"



const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


// app.use('/protected-route', verifyJWT, (req, res) => {
//     res.send('This is a protected route.');
//   });

// router import
import userrouter from "./routers/User.route.js";
import userPost from "./routers/Post.route.js";



// router declation 
app.use("/api" , userrouter)
app.use("/api", userPost)


export {app}


