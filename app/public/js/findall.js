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
      for (i = 0; i < 12; i++) {
        console.log(data.results[i])
        $(".results-div").append('<div class="col-12 col-md-6 col-lg-4 col-xl-3">\
            <div class="item-listing-container-skrn">\
            <img src="http://image.tmdb.org/t/p/w185//' + data.results[i].poster_path + '" alt="Listing">\
            <div class="item-listing-text-skrn">\
            <div class="item-listing-text-skrn-vertical-align">\
            <h6><a href="#">' + data.results[i].title + '</a></h6>\
            <div\
            class="circle-rating-pro"\
            data-value="' + data.results[i].vote_average/100 + '"\
            data-animation-start-value="' + data.results[i].vote_average/100 + '"\
            data-size="32"\
            data-thickness="3"\
            data-fill="{&quot;color&quot;: &quot;#42b740&quot;}"\
            data-empty-fill="#def6de"\
                    data-reverse="true"\
                  ><span style="color:#42b740;">' + data.results[i].vote_average + '</span></div>\
                </div>\
            </div>\
            </div>\
            </div>'
        )
        }
    });
  }
  genre()


  





});
