$(document).ready(function() {
 
	$(".avatarSelector").on("click", "input" , "label" , function(event) {
    
		var avatar = event.target
    console.log(avatar)
		var useravatar = $( avatar ).data( "useravatar" );

		$.ajax("/api/users/", {
			method:"PUT", 
			data: {
				avatar: useravatar
			}
		}).done(function ( data ) {
			console.log( "User updated." )
		});
	});

});

function getUserAnswer() {

 $("#userScore").on("click", function(event) {
        event.preventDefault();

        var newQuiz = {
            avatar: $("#userScore").val().trim(),
            scores: [
                $("#Question1").val().trim(),
                $("#Question2").val().trim(),
                $("#Question3").val().trim(),
            ]
        };

        console.log(newQuiz);
 });

 };
