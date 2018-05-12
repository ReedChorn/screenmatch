var key = "3877b2a9db32b0217d6cb5925ef52689";

$(document).ready(function() {
  //   var login = localStorage.getItem("user");
  var login = JSON.parse(localStorage.getItem("user"));
  console.log(login);
  $("#header-username").html(login.email);
  $("#user-name").html(login.firstName + " " + login.lastName);
//   $("#fav-genre").html(login.fav_genre);
  var userPref = {
    email: login.email
  };

  $.post("/api/getFavs", userPref).then(function(data) {});
  $.get("/api/sendFavs", function(favRes) {
      console.log(favRes)
  })
  



  function favorites() {
    var query = login.fav_genre;
    var url =
      "https://api.themoviedb.org/3/discover/tv?api_key=" +
      key +
      "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=" +
      query +
      "&page=1";
    //   console.log(url)
    $.get(url, function(data) {
      for (i = 0; i < 6; i++) {
        console.log(data.results[i]);
        $(".results-div").append(
          '<div class="col-12 col-md-6 col-lg-4 col-xl-3">\
            <div class="item-listing-container-skrn">\
            <img src="http://image.tmdb.org/t/p/w185//' +
            data.results[i].poster_path +
            '" alt="Listing">\
            <div class="item-listing-text-skrn">\
            <div class="item-listing-text-skrn-vertical-align">\
            <h6><a href="#">' +
            data.results[i].name +
            '</a></h6>\
            <div\
            class="circle-rating-pro"\
            data-value="' +
            data.results[i].vote_average / 10 +
            '"\
            data-animation-start-value="' +
            data.results[i].vote_average / 10 +
            '"\
            data-size="32"\
            data-thickness="3"\
            data-fill="{\
                &quot;color&quot;: &quot;#42b740&quot;\
            }"\
            data-empty-fill="#def6de"\
                    data-reverse="true"\
                  ><span style="color:#42b740;">' +
            data.results[i].vote_average +
            '</span></div>\
                </div>\
                </div>\
                <button type="button" class="btn btn-success fav-button removed" value = "' +
            data.results[i].id +
            '">Favorite</button>\
            </div>\
            </div>'
        );
      }
    });
  }
  favorites();
});
