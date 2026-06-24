import mongoose from "mongoose";

const connectDB = async () => {
    try {

        const res = await mongoose.connect('mongodb://localhost:27017/LearnMongodb')

        if(res){
            console.log(`dabase connected`)
        }
        
    } catch (error) {
        console.log("database connection error",error)
    }

}

export {connectDB}