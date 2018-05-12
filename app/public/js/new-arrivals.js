var key = "3877b2a9db32b0217d6cb5925ef52689";

$(document).ready(function() {
  //   var login = localStorage.getItem("user");
  var login = JSON.parse(localStorage.getItem("user"));
  console.log(login);
  $("#header-username").html(login.email);
  var userPref = {
    email: login.email
  };

  
  function newreleases() {
    // var query = login.fav_genre;
    
    var url =
      "https://api.themoviedb.org/3/discover/movie?api_key=" +
      key +
      "&language=en-US&sort_by=popularity.desc&include_adult=false&&release_date.gte=2018-05-01&page=1"
      console.log(url)
    $.get(url, function(data) {
      for (i = 0; i < 12; i++) {
        console.log(data.results[i])
        $(".results-div").append('<div class="col-12 col-md-6 col-lg-4 col-xl-3">\
            <div class="item-listing-container-skrn">\
            <img src="http://image.tmdb.org/t/p/w185//' + data.results[i].poster_path + '" alt="Listing">\
            <div class="item-listing-text-skrn">\
            <div class="item-listing-text-skrn-vertical-align">\
            <h6><a href = "#movie-modal' + data.results[i].id + '" data-toggle="modal" data-target: "#movie-modal' + data.results[i].id + '">' + data.results[i].title + '</a></h6>\
            <div\
            class="circle-rating-pro"\
            data-value="' + data.results[i].vote_average/10 + '"\
            data-animation-start-value="' + data.results[i].vote_average/10 + '"\
            data-size="32"\
            data-thickness="3"\
            data-fill="{\
                &quot;color&quot;: &quot;#42b740&quot;\
            }"\
            data-empty-fill="#def6de"\
                    data-reverse="true"\
                  ><span style="color:#42b740;">' + data.results[i].vote_average + '</span></div>\
                </div>\
                </div>\
                </div>\
                </div>\
                <div class="modal fade bd-movie-modal" id = "movie-modal' + data.results[i].id + '" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">\
                <div class="modal-dialog">\
                <div class="modal-content">\
                <div class="modal-header">\
                <h5 class="modal-title">' + data.results[i].title + '</h5>\
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
                <span aria-hidden="true">&times;</span>\
                </button>\
                </div>\
                <div class="modal-body">\
                <img src="http://image.tmdb.org/t/p/w300//' + data.results[i].backdrop_path + '" alt="Listing">\
                <p></p>\
                <p>' + data.results[i].overview + '</p>\
                <p> Rating: ' + data.results[i].vote_average + '</p>\
                </div>\
                <div class="modal-footer">\
                <button type="button" class="btn btn-success fav-button removed" value = "' + data.results[i].id + '">Favorite</button>\
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\
            </div>\
            </div>\
            </div>\
            </div>\
            '
        )
        }
    });
  }
  newreleases()


  





});
