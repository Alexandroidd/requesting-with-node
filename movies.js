// The movie file will contain a Module.
// This module should export a function named get(movieTitle).
// get(movieTitle) should make a request to OMDB with the movieTitle as an argument.
// You should console.log your output.
// You should test this with node to verify it works!

var request = require('request');


var getIt = function(movieTitle) {
  var movieUrl = ("http://www.omdbapi.com/?t=" + movieTitle);

  request(movieUrl, function(error, response, body) {  // so apparently you need to include all three parameters in order to get what you want??
  	var movieTitlePretty = JSON.parse(body);
  		

  	console.log(movieTitlePretty.Title);
  	// console.log('error', error);
  	// console.log('statuscode', response);
  });



};


module.exports = getIt;