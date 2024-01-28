// stape first install npm i express in terminal
// stape 2 set url routers using blew code 



const express = require('express')
const app = express()

app.use(function(req,res,next){
  console.log("middel where working");
  next();
})

app.get('/', function (req, res) {
  res.send('Hello shubham')
});
app.get('/profile', function (req, res) {
  res.send('Hello meshram')
});
app.get('/above', function (req, res) {
  res.send('Hello shubham meshram')
});

app.listen(3001);



// use url in browser
// http://localhost:3001/
// http://localhost:3001/profile
// http://localhost:3001/above



// // terminal code execution
// PS C:\Users\Dell\OneDrive\Desktop\web development\backend\express> node "c:\Users\Dell\OneDrive\Desktop\web development\backend\express\file1.js" single time run code line
// PS C:\Users\Dell\OneDrive\Desktop\web development\backend\express> npx nodemon .\file1.js  ///not stop server///
// [nodemon] 3.0.3
// [nodemon] to restart at any time, enter `rs`  
// [nodemon] watching path(s): *.*
// [nodemon] watching extensions: js,mjs,cjs,json
// [nodemon] starting `node .\file1.js`




// upter miderwer used 
// PS C:\Users\Dell\OneDrive\Desktop\web development\backend\express> node "c:\Users\Dell\OneDrive\Desktop\web development\backend\express\file1.js"
// PS C:\Users\Dell\OneDrive\Desktop\web development\backend\express> npx nodemon .\file1.js
// [nodemon] 3.0.3
// [nodemon] to restart at any time, enter `rs`  
// [nodemon] watching path(s): *.*
// [nodemon] watching extensions: js,mjs,cjs,json
// [nodemon] starting `node .\file1.js`
// middel where working
// middel where working
// middel where working