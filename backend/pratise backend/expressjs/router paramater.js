const express = require('express')
const nodemon = require('nodemon')
const app = express()


// single router server
app.get('/', function (req, res) {
  res.send('shubham meshram')
})


// multiple user router 
app.get('/profile/:username', function (req, res) {
  res.send(`hello brother ${req.params.username}`)
})

app.listen(3001);



// http://localhost:3001/profile/abtesting
// http://localhost:3001/profile/normal



