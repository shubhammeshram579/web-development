import mongoose from "mongoose";
import dotenv from "dotenv"


dotenv.config({
    path: "./.env"
})

// console.log("url ", process.env.MONGODB_URL)

const dbConnect = async () => {
    try {

        const connection = await mongoose.connect(process.env.MONGODB_URL)

        if(connection){
            console.log(`databse connection succes`)
        }
        
    } catch (error) {
        console.log("database connection error", error)
    }

} 


export {dbConnect}