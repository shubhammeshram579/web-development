// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/indexdb.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
})


// mongodb connection 
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})















// first aproch mongoose coneect with mongodb 
/*
( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("error",error);
            throw error
        })
        app.listen(process.env.PORT,() => {
            console.log(`app is lisning on port ${process.env.PORT}`);
        })
        
    } catch (error) {
        console.log("error",error)
        throw error
        
    }
})()
*/