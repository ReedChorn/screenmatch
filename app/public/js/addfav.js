
$(".fav-button").on("click", function (event) {
    event.preventDefault();
    var login = localStorage.getItem("user")
    var favs = {
        omdbID : $(this).attr("value"),
        userID: login
    }
    console.log(favs)

    var favbtn = $(this)
    
    if ( favbtn.hasClass('removed') ) {
        console.log("fav")
        $.post("/api/newFav", favs)
        .then(function(data) {
        });
        favbtn.removeClass('removed').addClass('favorited');
        favbtn.html("Unfavorite")
    } 
    else if ( $(this).hasClass('favorited') ) {
        console.log("unfav")
        $.post("/api/findFav", favs)
        .then(function(data) {
            console.log(data)
        });
        favbtn.removeClass('favorited').addClass('removed');
        favbtn.html("Favorite")
    } 

    
})



