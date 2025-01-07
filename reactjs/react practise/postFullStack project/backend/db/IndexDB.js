import mongoose from "mongoose";


const connectDB = async () => {
    try {
       const connectionintance =  await mongoose.connect(`mongodb://127.0.0.1:27017/megaproject`)
       console.log(`\n mongodb connected !! DB Host: ${connectionintance.connection.host}`)
       
        
    } catch (error) {
        console.log("MONGODB connectin Failed", error);
        process.exit(1)
        
    }
}

export default connectDB