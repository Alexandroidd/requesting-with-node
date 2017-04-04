
var getIt = require('./movies.js');



var threeFavoriteMovies = ["My Dinner With Andre", "Let the Right One In", "Superbad"];
threeFavoriteMovies.forEach(function(film){
 getIt(film);

});