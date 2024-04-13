var express = require('express');
var router = express.Router();
var schemaform = require("./users")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


// second regiter router for databses post in mongodb databses set
router.post('/', async function(req, res, next) {
  // create user data set up colums 
  const userdata = new schemaform({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    number: req.body.number,

  });
  // user.gOrder.push(userdata._id);
  await user.save();
  res.redirect("/")

})


module.exports = router;
