var express = require('express');
var router = express.Router();
const postModel = require("./posts")
const userModel = require("./users");
const passport = require('passport');
const upload = require("./multer");

const localStrategy = require("passport-local");
passport.use( new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/profile',isloggedIn, async function(req, res, next) {
  const user = await userModel.findOne({ //setup user name thenoging page showing log name
    username: req.session.passport.user
  })
  .populate("posts")
  res.render("profile" , {user})
  // console.log(user);
});

router.get('/feed', function(req, res, next) {
  res.render('feed');
});


router.post('/upload', isloggedIn, upload.single("file"), async function(req, res, next) {
  if(!req.file){
    return res.status(404).send("no files were given");
  }
  // res.send("file upload succefully")
  // data associate part
  const user = await userModel.findOne({username: req.session.passport.user});
  const post = await postModel.create({
    image: req.file.filename,
    imageText: req.body.filecaption,
    user: user._id
  });
  user.posts.push(post._id);
  await user.save();
  res.redirect("/profile");
});


router.get('/login', function(req, res, next) {
  // console.log(req.flash("error"));
  res.render('login',{error: req.flash('error')}); //flase massage is used of error massage popop
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
    failureRedirect: "/login",
    failureFlash: true
    }),function(req, res){
  });

  router.get("/logout",function(req,res){
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });

  });

  // condition formating set
  function isloggedIn(req, res, next){
    if (req.isAuthenticated()) return next();
    res.redirect("/login")
  }; 


module.exports = router;






// part 2
// PS C:\Users\Dell\OneDrive\Desktop\web development\backend\project2\printes> npm i connect-flash

// added 1 package, and audited 90 packages in 2s

// 3 packages are looking for funding
//   run `npm fund` for details

// 4 vulnerabilities (3 high, 1 critical)

// To address all issues (including breaking changes), run:
//   npm audit fix --force

// Run `npm audit` for details.
// PS C:\Users\Dell\OneDrive\Desktop\web development\backend\project2\printes> 
