var express = require('express');
var router = express.Router();
const userModel = require("./users")
const postModel = require("./post")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createuser', async function(req, res, next) {
 let createduser =  await userModel.create({
    username: 'shubham',
    password: 'sujita',
    posts: [],
    email: 'shubhcode97@gmail.com',
    fullName:'shubham meshram',
  });
  res.send(createduser);
  
});

module.exports = router;
