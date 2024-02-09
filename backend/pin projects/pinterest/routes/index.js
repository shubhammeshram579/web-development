var express = require('express');
var router = express.Router();
// import libries and pages 
const userModel = require("./users");
const passport = require('passport');
const localStrategy = require("passport-local");
const upload = require("./multer");

passport.use(new localStrategy(userModel.authenticate()));




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// get register  router page
router.get('/register', function(req, res, next) {
  res.render('register');
});

// router.get('/login', function(req, res, next) {
//   res.render('login');
// });


// get create profile page router
router.get('/profile' ,isLoggedIn,  async function(req, res, next) {
  const user = await userModel.findOne({username:req.session.passport.user});
  res.render('profile' , {user});
});



// get create fileupload router 
router.post('/fileupload' ,isLoggedIn, upload.single("image"), async function(req, res, next) {
  // find user data and set up image store 
 const user = await userModel.findOne({username:req.session.passport.user});
//  set colum image save
 user.profileImage = req.file.filename;
 await user.save();
 res.redirect("profile");


});

// router.get('/fileupload' ,isLoggedIn, upload.single("image"), async function(req, res, next) {
//  res.redirect("/fileupload");


// });


// second regiter router for databses post in mongodb databses 
router.post('/register', function(req, res, next) {
  // create user data set up colums 
  const userdata = new userModel({
    username: req.body.username,
    fullname: req.body.fullname,
    email: req.body.email,
    contact: req.body.contact,
  })
  // set up possport  promises fuction for password is currect then user is login other reject
  userModel.register(userdata,req.body.password)
  .then(function(){
    passport.authenticate("local")(req, res,function(){
      res.redirect("/profile")
    })
  });

});

// get create loging router page
router.post('/login' , passport.authenticate("local",{
  failureRedirect: "/",
  successRedirect: "/profile"
}));



// get create logout router page and got the passport websit cory the lated code 
router.get("/logout",function(req, res, next){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

// set function for passport protected purpuse
function isLoggedIn(req, res, next){
  if (req.isAuthenticated()){
    return next();
  }
  res.redirect("/")
};




module.exports = router;
