const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/ejsCrudpart2");

const userSchema = mongoose.Schema({
    image:String,
    name:String,
    email:String
})


module.exports = mongoose.model("user",userSchema);

