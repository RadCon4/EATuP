'use strict';

const yelp = require('yelp-fusion');
const categories = require('./categories.js');

// GET https://api.yelp.com/v3/businesses/search

// Place holders for Yelp Fusion's OAuth 2.0 credentials. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const clientId = '_u-LRtlNR1jJH7FNAbopbg';
const clientSecret = 'dZrsXV5VSmygDndCZ4WGZST0SZwrDJab2KlgdMIqpdT8dpQOoyE8g1mrVLZAsMyN';

// var location = "Richardson, TX";
var searchLat = 32.998702;
var searchLong = -96.698551;
var searchRadius = 8050;
// searchRadius is in meters, will need to convert
var term = 'Restaurants';
var searchLimit = 50;

function getCategory(arr){
  let randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum];
}

exports.search = function(address, cb) {
  let restaurantType = getCategory(categories);
  console.log(restaurantType);
  const searchRequest = {
    term: term + ', ' + restaurantType,
    // location by address below
    location: address,
    // location by lat/long below
    // location: searchLat + ', ' + searchLong,
    limit: searchLimit,
    // radius_filter: searchRadius
    radius: searchRadius
  };
  yelp.accessToken(clientId, clientSecret).then(response => {
    const client = yelp.client(response.jsonBody.access_token);

    client.search(searchRequest).then(response => {
      const Results = response.jsonBody.businesses;
      const prettyJson = JSON.stringify(Results, null, 4);
      console.log(Results.length);
      if (Results.length > 0) {
        cb(prettyJson);
      }
      else {
        exports.search(address, cb);
      }
    });
  }).catch(e => {
    console.log(e);
  });
};

exports.searchRestaurant = function(address, restaurant, cb) {
  console.log('searching...');
  const searchRequest = {
    term: term + ', ' + restaurant,
    // location by address below
    location: address,
    // location by lat/long below
    // location: searchLat + ', ' + searchLong,
    limit: searchLimit,
    // radius_filter: searchRadius
    radius: searchRadius
  };
  yelp.accessToken(clientId, clientSecret).then(response => {
    const client = yelp.client(response.jsonBody.access_token);

    client.search(searchRequest).then(response => {
      const Results = response.jsonBody.businesses;
      const prettyJson = JSON.stringify(Results, null, 4);
      console.log(Results.length);
      if (Results.length > 0) {
        cb(prettyJson);
      }
      else {
        cb('Unable to locate restaurant.')
      }
    });
  }).catch(e => {
    console.log(e);
  });
};

 /*
 code below is for an array of the values we would like

    [
	response.jsonBody.businesses.name,
	response.jsonBody.businesses.snippet_text,
	response.jsonBody.businesses.image_url,
	response.jsonBody.businesses.url,
	response.jsonBody.businesses.is_closed,
	response.jsonBody.businesses.price,
	response.jsonBody.businesses.display_phone,
	response.jsonBody.businesses.location.address,
	response.jsonBody.businesses.distance,
	response.jsonBody.businesses.reservation_url
    ];
    */
