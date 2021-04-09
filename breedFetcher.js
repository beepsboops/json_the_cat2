// REQUIRE

const request = require('request');
const { parse } = require('request/lib/cookies');

/* BREEDFETCHER FUNCTION 1.0

const breedFetcher = function() {
  const breedName = process.argv.slice(2);
  // console.log(breedName)
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      console.log("There was this error:", error);
    }
    // console.log('error:', error);
    // console.log('statusCode:', response && response.statusCode); // Print response status code
    // console.log('body:', body); // Print HTML
    // console.log(typeof body)
    const data = JSON.parse(body);
    // console.log(data)
    // console.log(typeof data)
    console.log("Description:", data[0].description);
  });
};

breedFetcher();

*/

// BREEDFETCHER FUNCTION 2.0

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    // console.log(data);
    if (error) {
      callback(error, null);
    } else if (data.length === 0) {
      callback(error, null);
    } else {
      callback(error, data[0].description);
    }
    // console.log("Description:", data[0].description);
  });
};

module.exports = { fetchBreedDescription };
