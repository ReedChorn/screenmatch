$("#next-btn").on("click", function (event) {
    event.preventDefault();
    $('#user-modal').modal('hide')
        
});

$("#submit-btn").on("click", function (event) {
    event.preventDefault();
    var newUser = {
        firstName: $("#first-name").val().trim(),
        lastName: $("#last-name").val().trim(),
        email: $("#user-email").val().trim(),
        password: $("#user-password").val().trim(),
        fav_director: $("#favorite-director").val().trim(),
        fav_actor: $("#favorite-actor").val().trim(),
        fav_genre: $("#favorite-genre").val().trim(),
        contemporary: $("#contemporary").val().trim(),
        animated: $("#animated").val().trim(),
        domestic: $("#domestic").val().trim()
    };
    localStorage.setItem("user", JSON.stringify(newUser))

    $.post("/api/new", newUser)
    .then(function(data) {
    console.log(data);
    console.log("home")

    });

})

