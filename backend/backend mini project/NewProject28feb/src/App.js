const express = require('express')
const app = express()

// import router
const router = require("./Routers/Index.js")


// middelwere
app.use(express.json());
app.use(express.urlencoded({extended: true, limit:"16kb"}))

// create rest api url
app.use("/api",router)


app.listen(3000 , () => console.log("server running on post 3000"));


module.exports = app;
