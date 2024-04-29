const express = require("express");
const usermodel = require("./usermodel");
const app = express();

app.get("/", (req,res)=>{
    res.send("shubham")

})

// create user
app.get("/create", async (req , res)=>{
    let createUser = await usermodel.create({
        name: "shubham",
        username: "shubham1",
        email:"shubham123@gmail.com"
    })

    res.send(createUser);

})

// updated user
app.get("/update", async (req , res)=>{
   let updatedUser = await usermodel.findOneAndUpdate({username: "shubham1"},{name:"labham"},{new:true})
    res.send(updatedUser);

})


// read all users 
app.get("/read", async (req, res) =>{
   let users = await usermodel.find();

   res.send(users)

})

// findOne used 
app.get("/readOne", async (req, res) =>{
    let usersOne = await usermodel.findOne({name:"shubham"});
 
    res.send(usersOne)
 
 })

// delete used
 app.get("/delete", async (req, res) =>{
    let usersOne = await usermodel.findOneAndDelete({name:"shubham"});
 
    res.send(usersOne)
 
 })




app.listen(3001);