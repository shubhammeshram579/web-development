
// i need some npm libries 
// npm i mongoose passport passport-local passport-local-mongoose express-session 

// import mongoose
const mongoose = require("mongoose");
const passport = require("passport");

// import passport local mongoose
const plm = require("passport-local-mongoose");

// connect with mongodb server and create new databases like name is pin
mongoose.connect("mongodb://127.0.0.1:27017/form");


// create userSchma for example in mysql table creation
const userSchma = mongoose.Schema({
  // as i need dtype colume set up
  first_name: String,
  last_name: String,
  email: String,
  number: Number,
 
  // create colume for connect post id
 


});



// plugin passport userSchma
userSchma.plugin(plm);


// export data on mongodb server create a user name model table
module.exports = mongoose.model("user", userSchma);



