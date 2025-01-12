import express from "express"
import {StudentInfo } from "./Models/StudentInfo.js";
import connectDB from "./DB/ConnectDb.js"

const app = express()


connectDB();


app.get('/', function (req, res) {
  res.send('Hello World')
})


app.post("/studentinfos/std",(async (req,res) => {
  try {
    const {StudentName,Age,gender,city,StdId} = req.body;
    console.log(req.body)

    if(!StudentName){
      console.log("student name is not found")
    }


    const StudentInfoData = await StudentInfo.create({
      StudentName:StudentName,
      Age:Age,
      gender:gender,
      city:city,
      StdId:StdId
    })

    if(!StudentInfoData){
      throw new ApiError(500, "something went wrong");
  };

    console.log(StudentInfoData)


    return res.status(201).json({ 
      status: 201, 
      message: "Post created successfully.", 
      data: StudentInfoData 
  });
    
  } catch (error) {
    console.log(error.message || "somting error")
    
  }
}))


// PORT = 3000 || 5000
app.listen(3000);