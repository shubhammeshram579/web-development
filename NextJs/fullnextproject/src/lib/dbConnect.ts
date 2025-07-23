import mongoose from "mongoose";


type ConnectionObject = {
    isConnected?:number
}


const connection : ConnectionObject = {}


async function dbConnect(): Promise<void> {
    // first check if databasses allready connected
    if(connection.isConnected){
        console.log("allreafy connection to database")
        return
    }

    // connect with databses like mongodb
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "", {})

        connection.isConnected = db.connections[0].readyState

        console.log("db connection succssfully")
    } catch (error) {

        console.log("databses connect faild",error)
        process.exit(1)
        
    }
    
}

export default dbConnect