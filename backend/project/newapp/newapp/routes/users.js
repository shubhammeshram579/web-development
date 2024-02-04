const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/newdata")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [
  ],
  dp: {
    type: String, // You may use String to store the file path or URL of the profile picture.
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullName:{
    type:String,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
