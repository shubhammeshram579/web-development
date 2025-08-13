import express from "express"
import Userrouter from "../src/routers/User.js"


const app = express()
const PORT = "5000"



// home router
app.get('/', (req, res) => {
  res.send('Hello World!')
})


// rest api routers
app.use("/api",Userrouter)




// server listen 
app.listen(PORT , () => {console.log(`server runnning on 5000....`)})