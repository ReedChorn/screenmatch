var key = "3877b2a9db32b0217d6cb5925ef52689";

$(document).ready(function() {
  //   var login = localStorage.getItem("user");
  var login = JSON.parse(localStorage.getItem("user"));
  console.log(login);
  $("#header-username").html(login.email);
  var userPref = {
    email: login.email
  };

  function director() {
    var query = login.fav_director;
    var url =
      "https://api.themoviedb.org/3/search/movie?api_key=" +
      key +
      "&query=" +
      query +
      "";
    $.get(url, function(data) {
      console.log(data);
    });
  }

  function genre() {
    var query = login.fav_genre;
    var url =
      "https://api.themoviedb.org/3/discover/movie?api_key=" +
      key +
      "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=" +
      query +
      "&page=1";
      console.log(url)
    $.get(url, function(data) {
      console.log(data);
    });
  }
  genre()
  





});
