import express from "express"
import UserRouter from "../routers/User"



const app = express()



app.use("/api",UserRouter)


app.listen(4000 ,() => console.log(`server running on port 4000`))




