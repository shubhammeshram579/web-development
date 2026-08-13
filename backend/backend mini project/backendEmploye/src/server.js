import express from "express"
import dotenv from "dotenv"
import {dbConnect} from "../src/config/dbConnect.js"
import employeeRoter from "../src/routers/employee.router.js"

const app = express()

dotenv.config()



dbConnect()


app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))

app.get("/helth", (req, res) => {
    try {
        res.send("hello shubham")
    } catch (error) {
        console.log("server error", error)
        
    }

})




app.use("/api/employees", employeeRoter)

const PORT = process.env.PORT || 4000

app.listen(PORT , () => {console.log(`server runing on ${PORT}`)} )