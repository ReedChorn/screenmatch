// unirest.post("https://imdb.p.mashape.com/movie")
// .header("X-Mashape-Key", "C1EWw36Qwnmshi90XKlTmMfsFLdYp1QOYdJjsnI1qDOPj43q57")
// .header("Content-Type", "application/x-www-form-urlencoded")
// .header("Accept", "application/json")
// .send("searchTerm=Twilight")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });

imdb = require("imdb-api")

// imdb.get('The Toxic Avenger', {apiKey: 'trilogy', timeout: 30000}).then(console.log).catch(console.log);
// imdb.getById('tt0090190', {apiKey: 'foo', timeout: 30000}).then(console.log).catch(console.log);
// imdb.getReq({ name: 'The Toxic Avenger', opts: {apiKey: 'foo', timeout: 30000} }).then(console.log).catch(console.log);
// imdb.getReq({genres: 'action', opts: {apiKey: 'trilogy', timeout: 30000} }).then(console.log).catch(console.log);

// imdb.search({
//     genres: 'Action, Comedy, Horror'
//   }, {
//     apiKey: 'trilogy'
//   }).then(console.log).catch(console.log);

//   imdb.getById('tt0090190', {apiKey: 'trilogy', timeout: 30000}).then(console.log).catch(console.log);

const mdb = require('moviedb')('3877b2a9db32b0217d6cb5925ef52689');

mdb
  .searchMovie({ query: 'Action' }, (err, res) => {
    console.log(res);
  })