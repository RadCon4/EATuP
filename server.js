var express = require('express');
const path = require('path');
const bp = require('body-parser');
const routering = require('./controllers/router.js');

// var twilio = require('twilio');

// var accountSSID = null;
// var authToken = null;

// var client = twilio(accountSSID, authToken);

// client.messages.create({
//   body: 'This is a test from eatUp!',
//   to: '8177068356',
//   from: '+18722013712'
// })
// .then((message) => console.log(message.sid))

var app = express();
const PORT = process.env.PORT || 3000;
const db = require('./models');

app.use(bp.json());
app.use(bp.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));
app.use("/", routering)
app.use("/add", routering);
app.use("/search", routering);
app.use("/all", routering);

db.sequelize.sync({force: false}).then(function(){
  app.listen(PORT, function(){
    console.log("The server has connected on " + PORT);
  });
})
