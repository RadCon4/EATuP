const express = require('express');
const router = express.Router();
const db = require('../models');
const Yelp = require('../Yelp_Fusion_API_Node/YelpFusion-Node-CH-WORKING.js')
const path = require('path');

router.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "../views/indexMain.html"));
});

router.get("/login", function(req, res){
  res.render("login");
});

router.get("/signup", function(req, res){
  res.render("signup");
});

router.get("/random", function(req, res){
  res.sendFile(path.join(__dirname, "../views/restaurantPage.html"));
});

router.post('/add/restaurant', function(req, res){
  db.Restaurants.create({
    restaurantName: req.body.restaurantName,
    streetAddress: req.body.address,
    city: req.body.city,
    zip: req.body.zipcode,
    latitude: req.body.lat,
    longitude: req.body.long,
    UserId: 1
  }).then(function(){
    res.end();
    })
})

router.get("/add", function(req, res){
  res.sendFile(path.join(__dirname, "../views/add.html"));
});

router.get("/add/:address/:restaurant", function(req, res){
  Yelp.searchRestaurant(req.params.address, req.params.restaurant, function(results){
    res.send(results);
  });
});

router.get('/search/:address', function(req, res){
  Yelp.search(req.params.address, function(results){
    res.send(results);
  });
});

// router.get('/all', function(req, res){
//   res.sendFile(path.join(__dirname, "../public/results.html"));
// });

module.exports = router;
