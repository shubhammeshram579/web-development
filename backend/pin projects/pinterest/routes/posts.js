
// import mongoose
const mongoose = require("mongoose");


// create postSchma for add post data 
const postSchma = mongoose.Schema({
  // as i need dtype colume set up
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"user"
  },
  title: String,
  description: String,
  image:String
});



// export data on mongodb server create a user name model table
module.exports = mongoose.model("post", postSchma);


