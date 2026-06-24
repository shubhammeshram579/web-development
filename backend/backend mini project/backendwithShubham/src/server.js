import express from "express"
import dotenv from "dotenv"
import cors from "cors";
import {connectDB} from "./config/connectDB.js"
import productRouter from "./routers/product.router.js"
import orderRouter from "./routers/order.router.js"



dotenv.config()

const app = express()

// database connection
connectDB()

app.use(express.json({limit: "16kb"}))

app.use(
  cors({
    origin: "http://localhost:5173", // React Vite URL
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))


app.get("/" , (req,res) => {
    try {
        res.send("hello shubham")
        
    } catch (error) {
        console.log("somting api error",error)
    }

})

app.use("/api/products",productRouter)
app.use("/api/orders",orderRouter)


const PORT = process.env.PORT || 5000

app.listen(PORT , () => console.log(`server running on port ${PORT}`))