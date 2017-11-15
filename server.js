// var express = require('express');
// const path = require('path');
// const bp = require('body-parser');
// const routering = require('./controllers/router.js');
// var session  = require('express-session');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var morgan = require('morgan');
// var passport = require('passport');
// var flash = require('connect-flash');
// require('./config/passport')(passport); // pass passport for configuration
// require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
//
//
// // var twilio = require('twilio');
//
// // var accountSSID = null;
// // var authToken = null;
//
// // var client = twilio(accountSSID, authToken);
//
// // client.messages.create({
// //   body: 'This is a test from eatUp!',
// //   to: '8177068356',
// //   from: '+18722013712'
// // })
// // .then((message) => console.log(message.sid))
//
// var app = express();
// const PORT = process.env.PORT || 3000;
// const db = require('./models');
//
// app.use(bp.json());
// app.use(bp.urlencoded({extended: true}));
// app.use(morgan('dev')); // log every request to the console
// app.use(cookieParser());
// app.use(express.static(__dirname + '/public'));
// app.use("/", routering)
// app.use("/add", routering);
// app.use("/search", routering);
// app.use("/all", routering);
//
// app.set('view engine', 'ejs');
//
// app.use(session({
// 	secret: 'vidyapathaisalwaysrunning',
// 	resave: true,
// 	saveUninitialized: true
//  } )); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
// app.use(flash()); // use connect-flash for flash messages stored in session
//
//
// // routes ======================================================================
//
// db.sequelize.sync({force: false}).then(function(){
//   app.listen(PORT, function(){
//     console.log("The server has connected on " + PORT);
//   });
// })


// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var session  = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app      = express();
var port     = process.env.PORT || 8080;

var passport = require('passport');
var flash    = require('connect-flash');

// configuration ===============================================================
// connect to our database

require('./config/passport')(passport); // pass passport for configuration



// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({
	secret: 'vidyapathaisalwaysrunning',
	resave: true,
	saveUninitialized: true
 } )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
const routers = require('./controllers/router.js');

app.use("/", routers)
app.use("/add", routers);
app.use("/search", routers);
app.use("/all", routers);

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
