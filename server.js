var express = require('express');
var twilio = require('twilio');

var accountSSID = null;
var authToken = null;

var client = twilio(accountSSID, authToken);

client.messages.create({
  body: 'This is a test from eatUp!',
  to: '8177068356',
  from: '+18722013712'
})
.then((message) => console.log(message.sid))

var app = express();
const PORT = process.env.PORT || 3000;
const db = require('./models');

app.get("/", function(req, res){
  res.send("welcome to the home page");
})

db.sequelize.sync({force: false}).then(function(){
  app.listen(PORT, function(){
    console.log("The server has connected on " + PORT);
  });
})
