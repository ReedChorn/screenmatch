var tmdb = require('moviedb')('3877b2a9db32b0217d6cb5925ef52689')

//Genre
var genreId = 0
var queryString = '/discover/movie?with_genres=' + genreId + 'sort_by=vote_average.desc'

//Rating
var rating
var queryString = '/discover/movie?certification_country=US&certification=' + rating + '&sort_by=vote_average.desc'

//Director
var crewMember
var queryString = '/discover/movie?with_crew=' + crewMember + '&sort_by=vote_average.desc'

//Actor
var castMember
var queryString = '/discover/movie?with_cast=' + crewMember + '&sort_by=vote_average.desc'

//Decade