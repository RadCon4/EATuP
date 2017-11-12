const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant.js');
const Yelp = require('../Yelp_Fusion_API_Node/YelpFusion-Node-CH-WORKING.js')

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

router.post('/search', function(req, res){
  Yelp.search(req.body.city, req.body.state);
})

module.exports = router;
