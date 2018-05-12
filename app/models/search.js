var tmdb = require('moviedb')('3877b2a9db32b0217d6cb5925ef52689')

// var firstName = 'John';
// var lastName = 'Lasseter';
var searchURL = 'http://api.tmdb.org/3/search/person?api_key=e9b3cdf687f55135a9cc389919629c2d&query=';

function getactorID() {
    $.getJSON(searchURL+firstName+'%20'+lastName+'&sort_by=popularity.desc').then(function(response){
        console.log(response.results[0].id);
        //grabs id based on actor name
    });
};
getID();

// add logic to grab the logged id and make it a variable called actorID

function getdirectorID() {
    $.getJSON(searchURL+firstName+'%20'+lastName+'&sort_by=popularity.desc').then(function(response){
        console.log(response.results[0].id);
        //grabs id based on director name
    });
};
getID();

//add logic to grab the logged id and make it a variable called directorID

var actorID = ''
var directorID = ''
var genreID
var rating 

var fromTime
var toTime
var fromDate
var toDate
var minRating
var maxRating

var queryString = 'http://api.tmdb.org/3/discover/movie?api_key=e9b3cdf687f55135a9cc389919629c2d&with_cast='+actorID+
'&with_crew='+directorID+
'&with_genres='+genreID+
'certification_country=US&certification='+rating+
//Choose From Runtime... (how long of a program they want to watch)
'&with_runtime.gte='+fromTime+'&with_runtime.lte='+toTime+
//Or Release Date by Decade (yyyy-mm-dd)
'&primary_release_date.gte='+fromDate+'&primary_release_date.lte='+toDate+
//Or By Rating Bracket (from 1-10)
'&vote_average.gte='+minRating+'&vote_average.gte='+maxRating+
'&sort_by=popularity.desc'


//Actor and Director
// 'http://api.tmdb.org/3/search/person?api_key=e9b3cdf687f55135a9cc389919629c2d&query='+firstName+'%20'+lastName+'&sort_by=popularity.desc'

//DiscoverPeople
// 'http://api.tmdb.org/3/discover/movie?api_key=e9b3cdf687f55135a9cc389919629c2d&with_people='+id+'&sort_by=popularity.desc'

//Genre
// 'http://api.tmdb.org/3/discover/movie?api_key=e9b3cdf687f55135a9cc389919629c2d&with_genres='+genreID+'&sort_by=popularity.desc'

//Rating 
// 'http://api.tmdb.org/3/discover/movie?api_key=e9b3cdf687f55135a9cc389919629c2d&certification_country=US&certification='+rating+'&sort_by=popularity.desc'

//Runtime
// 'http://api.tmdb.org/3/discover/movie?api_key=e9b3cdf687f55135a9cc389919629c2d&with_runtime.gte='+fromTime+'&with_runtime.lte='+toTime+'&sort_by=popularity.desc'