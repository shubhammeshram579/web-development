const express = require('express')
const nodemon = require('nodemon')
const app = express()

app.get('/', function (req, res) {
  res.send('shubham meshram')
})

app.get('/home', function (req, res) {
  res.send('shubham come home early morning 6 oclock int unimg')
})

app.listen(3000)


// single time run code then used 
// node  filepath

// alwas server run then apply nodemon
// npx nodemon .\script.js


// PS C:\Users\Dell\OneDrive\Desktop\web development\backend\pratise backend\expressjs> npx nodemon .\script.js
// [nodemon] 3.1.0
// [nodemon] to restart at any time, enter `rs`  
// [nodemon] watching path(s): *.*
// [nodemon] watching extensions: js,mjs,cjs,json
// [nodemon] starting `node .\script.js`