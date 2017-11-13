const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant.js');
const Yelp = require('../Yelp_Fusion_API_Node/YelpFusion-Node-CH-WORKING.js')
const path = require('path');

router.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// router.post('/add', function(req, res){
//   // TODO: MAKE IT SO IT WILL ACTUALLY POST THE UPDATE TO THE DATABASE
//   // Restaurant.create({
//   //   restaurantName: req.body.restaurantName,
//   //   streetAddress: req.body.address,
//   //   city: req.body.city,
//   //   state: req.body.state,
//   //   UserId: 11,
//   //   createdAt: Date.now(),
//   //   updatedAt: Date.now()
//   // });
//   console.log(req.body.restaurantName);
//   res.redirect("/");
// })

router.get('/search/:address/:city/:state', function(req, res){
  console.log(req.params)
  Yelp.search(req.params.address, req.params.city, req.params.state, function(results){
    res.send(results);
  });
});

router.get('/all', function(req, res){
  res.sendFile(path.join(__dirname, "../public/results.html"));
});

module.exports = router;
