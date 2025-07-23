const express = require("express")

const router = express.Router();


// basic routing
router.get("/" , (req,res) => {
    res.send("hello shubham");
});


let userdata = [{id:1,name:"shubham"}]

// rest api basic example
router.get("/users" , (req,res) => {
    res.json(userdata)
});


// post api
router.post("/users", (req,res) => {
    const newuserdata = {id:userdata.length + 1,name:"labham"}
    userdata.push(newuserdata);
    res.status(201).json(newuserdata);
});



module.exports = router;