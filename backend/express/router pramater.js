const express = require('express')
const app = express()


// create single router
app.get('/profile', function (req, res) {
  res.send('Hello shubham')
});


// create multiple router user name 
app.get('/profile/:username', function (req, res) {
    res.send(` well come my  multiple user name ${req.params.username}`)
  });


app.listen(3001);



// single user rounter 
// http://localhost:3001/profile



// multiple username routers 
// http://localhost:3001/profile/shubham
// http://localhost:3001/profile/labham
// http://localhost:3001/profile/pallavi
// http://localhost:3001/profile/aachal


// used npx nodemon output


// PS C:\Users\Dell\OneDrive\Desktop\web development\backend\express> node "c:\Users\Dell\OneDrive\Desktop\web development\backend\express\router pramater.js"
// PS C:\Users\Dell\OneDrive\Desktop\web development\backend\express> npx nodemon '.\router pramater.js'
// [nodemon] 3.0.3
// [nodemon] to restart at any time, enter `rs`     
// [nodemon] watching path(s): *.*
// [nodemon] watching extensions: js,mjs,cjs,json   
// [nodemon] starting `node ".\\router pramater.js"`
// [nodemon] restarting due to changes...
// [nodemon] starting `node ".\\router pramater.js"`
// [nodemon] restarting due to changes...
// [nodemon] starting `node ".\\router pramater.js"`