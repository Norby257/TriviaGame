
//Pseudocode 

//check if files are linked correctly 
console.log("we are linked");

//global variables to hold time and score

//you know what would be cool? randomly displaying a new set of questions every time the start button is pressed 

//get document ready 
$(document).ready(function() {
    console.log("I'm ready");

            //global vars 
            var count; 
            var score;
            var incorrectAnswer;
            var timer; 
            var duration = 5;
            var questionsAnswered;
            var questionsNotAnswered;
            $(".timer").html("<h1> " + duration + "</h1>");
            $(".questions").hide();
            $("#ron").hide();
            $("#ralphio").hide();

            //hide answers  http://api.jquery.com/val/
            //build the radio buttons in the html then hide them. when button is clicked show them 
            //use val attribute to get val of answer. compare to correct answer to score 
 
            
    //user clicks button, questions and answers are displayed 
    $("#start").click(function() {
        // $(".questions").show(); 
        // $(".choices").show();
        console.log("Yay, you started the game");
        $(".questions").show();

      //var for timer. when button is clicked, the timer starts DECREMENTING 
        var intervalId = setInterval(function() {
            duration--;
            $(".timer").html("<h1> " + duration + "</h1>");            
            if (duration === 0) {
                //alert user that the game is over 
                alert("the game is over!");
                clearInterval(intervalId);
                $(".questions").empty();
               
                $("#start").prop("disabled", false);
                duration = 5;
                $(".timer").html("<h1> " + duration + "</h1>");    
                
                //function for showing answers -pseudo code since I could not finish this part 
                function showScore(score) {
                    $( "input[type=radio]:checked" ).val();
                    $("<p>").text(`Correct Answers: ${score}`);
                    $("<p>").text(`Incorrect Answers: ${score}`);
                    $("<p>").text(`unanswered: ${score}`);
                    //checking to see which text + image to display to the user 
                    if (score === 4) {
                        // text if you win 
                        alert("Victory! Ron Swanson is proud.");
                        // image if you win 
                        $("#ron").show();
                        
                    } else  {
                        //text if you lose 
                        alert("Try again! Sometimes you have to work a litle, so you can ball a lot!");
                        //image if you lose 
                        $("#ralphio").show();
                        
                    }
                    
                }
                
                
            }

        },1000);
        $(this).prop("disabled", true);


    
  
    

    });

});


/* to make this better in the future, it'd be more fun to dynamically update the DOM with an API call to GIPHY for win /lose random gif
to make this better in the future, it'd be more fun to pull randomly generated Parks and Recreation questions/answers each game


*/ 






