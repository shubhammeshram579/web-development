import mongoose from "mongoose";


// database connection
export async function connectDb() {
    try {

        mongoose.connect(process.env.MONGO_URI!)

        const connection = mongoose.connection

        connection.on("connected",() => {
            console.log("mongodb connected succesfully")
        })

        connection.on("error", (err) => {
            console.log("mongodb connection error" + err)
            process.exit()
        })
        
    } catch (error) {
        console.log("somting went wrorg mongodb connection error")
        console.log(error)
        
    }
}