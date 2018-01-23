 console.log("")

// This code handles what happens when the user clicks the "playGame" button on the index.html. 

$(document).ready(function() {
 $("#formSubmitButton").on("click", function(event) {
  event.preventDefault();
  console.log("You clicked a button!")

  // Make a new user object
  var newUser = {
    name: $("#userName").val().trim(),
    password: $("#userPassword").val().trim(),
    city: $("#userCity").val().trim(),
    state: $("#userState").val().trim();
    
  };

// Send an AJAX POST-request with jQuery
  $.post("/api/index", newUser)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  
  $("#userName").val("");
  $("#userPassword").val().trim(),
  $("#userCity").val("");
  $("#userState").val("");
  
});





