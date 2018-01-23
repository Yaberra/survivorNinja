 console.log("see if this is logging");

$(document).ready(function() {
$("#formSubmitButton").on("submit", function(event) {
event.preventDefault(); 
var newUser = {
    name: $("#userName").val().trim();
    Password: $("#userPassword").val().trim();
    City: $("#userCity").val().trim();
    State: $("#userState").val().trim();
  }
})
$.post("/api/users",newUser, function(data) {
.then(function(data)) {
   console.log(data); 
  
  }
})

})  

// Empty each input box by replacing the value with an empty string

$("#userName").val("");
$("#userPassword").val().trim(),
$("#userCity").val("");
$("#userState").val("");
  

});





