var express = require('express');
var router = express.Router();
const userModel = require("./users")
const postModel = require("./post")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// find data user id true
router.get('/allpostdata', async function(req, res, next) {
  let user = await userModel
  .findOne({_id: "65c1164dee38fdf0aca82571"})
  .populate("posts");// for all post data
  res.send(user);
});

// create user mongodb databases
router.get('/createuser', async function(req, res, next) {
 let createduser =  await userModel.create({
    username: 'shubham meshram',
    password: 'sujita',
    posts: [],
    email: 'shubhcode97@gmail.com',
    fullName:'shubham meshram',
  });
  res.send(createduser);
});

// create post table for how many time post one user 
router.get('/createpost', async function(req, res, next) {
  let createpost = await postModel.create({
    postText: "hello world",
    user:"65c1164dee38fdf0aca82571"
  });

  // add id in user post colum for how many time one user post for paticalur id
  let user = await userModel.findOne({_id:"65c1164dee38fdf0aca82571"});
  user.posts.push(createpost._id);
  await user.save();
  res.send("done");


});

module.exports = router;
