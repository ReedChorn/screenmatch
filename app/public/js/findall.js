$(document).ready(function() {
//   var login = localStorage.getItem("user");
  var login = JSON.parse(localStorage.getItem('user'));
  console.log(login)
  $("#header-username").html(login.email);
  var userPref = {
    email: login.email
  };


});
