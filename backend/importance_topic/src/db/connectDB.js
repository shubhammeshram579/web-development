import mongoose from "mongoose";
import dotevn from "dotenv"

dotevn.config()

const connectDB = async () => {
    try {

        const connectmongodbconnection = await mongoose.connect(process.env.MONGODB_URL )

        console.log("database connection succefully")
        
    } catch (error) {
        console.log("something database error",error)
        
    }


}

export default connectDB