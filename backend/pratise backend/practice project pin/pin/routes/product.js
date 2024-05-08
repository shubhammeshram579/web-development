
// import mongoose
const mongoose = require("mongoose");


// create postSchma for add post data 
const productSchema = mongoose.Schema({
  // as i need dtype colume set up
  // user:{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref:"user"
  // },
  producttitle: String,
  qty:Number,
  price: String,
  pimags:String,
});



// export data on mongodb server create a user name model table
module.exports = mongoose.model("AddtoProduct2", productSchema);


