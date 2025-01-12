import mongoose from "mongoose"

const connectDB =  async () => {
    try {
        const connectMongoDb = await mongoose.connect("mongodb://localhost:27017/FullStackMiniProject");
        console.log(`connect mongodb`)
        
    } catch (error) {
        console.log(error.message || "mongdb connection error")
        
    }

}

export default connectDB