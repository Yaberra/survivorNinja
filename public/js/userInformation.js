$(document).ready(function() {
 $("#formSubmitButton").on("submit", function(event){
  event.preventDefault();
   var userInformation = {
    name: $("#userName").val().trim();
    Password: $("#userPassword").val().trim();
    City: $("#userCity").val().trim();
    State: $("#userState").val().trim();
}
 }) 

 $("#formSubmitButton").on("click", function(){
    $.post("/api/users",userInfo, function(data){
        console.log("post successful");
    });
})

// Send the POST request.
    $.ajax("/user", {
      type: "POST",
      data: userInformation
    }).then(
      function() {
        console.log();
        
      }
    );
  });
}



