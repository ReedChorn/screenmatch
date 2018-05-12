


$(document).ready(function() {
    //   var login = localStorage.getItem("user");
    var login = JSON.parse(localStorage.getItem("user"));
    $("#exampleModalLabel").html("Thanks for Joining, " + login.firstName + "!");

})
