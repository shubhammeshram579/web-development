import express from "express"
import router from "./router/User.js"


const app = express();

const port = "4000"

app.use("/api/v1/user", router)
// App.get("/", (req,res) => {
//     res.send("hello word")
// })



app.listen(port ,() => {
    console.log(`server running on ${port}`)
})