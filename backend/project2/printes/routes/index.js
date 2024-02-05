var express = require('express');
var router = express.Router();
const userPost = require("./posts")
const userModel = require("./users");
const passport = require('passport');
const localStrategy = require("passport-local");
passport.use( new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/profile',isloggedIn, function(req, res, next) {
  res.send("profile")
});


router.get('/login', function(req, res, next) {
  res.render('login');
});




router.post("/register", function(req, res){
  const {username , email , fullname} = req.body;
  const userData = userModel({username , email,fullname});

  userModel.register(userData,req.body.password)
  .then(function(){
    passport.authenticate("local")(req, res , function(){
      res.redirect("/profile");
    })
  })
  })


  router.post("/login", passport.authenticate("local",{
    successRedirect: "/profile",
    failureRedirect: "/"
    }),function(req, res){
  });

  router.get("/logout",function(req,res){
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });

  });

  // contion set
  function isloggedIn(req, res, next){
    if (req.isAuthenticated()) return next();
    res.redirect("/")
  }; 


module.exports = router;
