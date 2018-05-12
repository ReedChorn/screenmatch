$( document ).ready(function() {

    var login = localStorage.getItem("user")
    var userPref = {
        email: login
    }
    console.log(userPref)

    $.post("/api/userPref", userPref)
    .then(function(data) {
    console.log("userpref")

    });

});