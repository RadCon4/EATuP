'use strict';

const yelp = require('yelp-fusion');

// GET https://api.yelp.com/v3/businesses/search

// Place holders for Yelp Fusion's OAuth 2.0 credentials. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const clientId = '_u-LRtlNR1jJH7FNAbopbg';
const clientSecret = 'dZrsXV5VSmygDndCZ4WGZST0SZwrDJab2KlgdMIqpdT8dpQOoyE8g1mrVLZAsMyN';

// var location = "Richardson, TX";
var searchLat = 32.998702;
var searchLong = -96.698551;
var searchRadius = 1600;
// searchRadius is in meters, will need to convert
var term = 'Restaurants';
var searchLimit = 10;
var restaurantType = "burgers";

exports.search = function(city, state) {
  let searchLocation = `${city}, ${state}`;
  const searchRequest = {
    term: term + ', ' + restaurantType,
    // location by address below
    location: searchLocation,
    // location by lat/long below
    // location: searchLat + ', ' + searchLong,
    limit: searchLimit,
    radius_filter: searchRadius
  };
  yelp.accessToken(clientId, clientSecret).then(response => {
    const client = yelp.client(response.jsonBody.access_token);

    client.search(searchRequest).then(response => {
      const Results = response.jsonBody.businesses;
      const prettyJson = JSON.stringify(Results, null, 4);
      console.log(prettyJson);
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
