// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // make a newCharacter obj
  var newUser = {
    // name from name input
    firstName: $("#firstName").val().trim(),
    // role from role input
    lastName: $("#lastName").val().trim(),
    // age from age input
    email: $("#email").val().trim(),
    // points from force-points input
    password: $("#password").val().trim()
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/new", newUser)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding user...");
    });

  // empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#role").val("");
  $("#age").val("");
  $("#force-points").val("");

});
