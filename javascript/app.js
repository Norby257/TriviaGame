
//Pseudocode 

//check if files are linked correctly 
console.log("we are linked");

//global variables to hold time and score

//you know what would be cool? randomly displaying a new set of questions every time the start button is pressed 
//API calls to a tv show database 



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

            //hide answers  http://api.jquery.com/val/
            //build the radio buttons in the html then hide them. when button is clicked show them 
            //use val attribute to get val of answer. compare to correct answer to score 

             //set timer to 1:20 on page 
        // $(".timer").text("1:20");
        // //Get timer to start counting down 
        // function countDown() {
        //     //count down one second at a time 
        //     invervalId = setInterval(decrement, 1000);
            //show the questions 
            //disable the button after it's clicked 

            
    //user clicks button, questions and answers are displayed 
    $("#start").click(function() {
        // $(".questions").show(); 
        // $(".choices").show();
        console.log("Yay, you started the game");
        $(".questions").show();
        //keep score
        //get value of each question. if matches correct value. then add one to counter
        $( "input[type=radio]:checked" ).val();
        

      //var for timer. when button is clicked, the timer starts DECREMENTING 
        var intervalId = setInterval(function() {
            duration--;
            $(".timer").html("<h1> " + duration + "</h1>");            
            if (duration === 0) {
                //alert user that the game is over 
                alert("the game is over!");
                clearInterval(intervalId);
                $(".questions").empty();
                $("<p>").text(`Correct Answers: ${score}`);
                $("<p>").text(`Incorrect Answers: ${score}`);
                $("<p>").text(`unanswered: ${score}`);
            
                
    
                $("#start").prop("disabled", false);
                duration = 5;
                $(".timer").html("<h1> " + duration + "</h1>");            
                
                
            }

        },1000);
        $(this).prop("disabled", true);


    
  
    

    });

});


//once timer is zero, do the following:



//here is the src for ron swanson https://vignette4.wikia.nocookie.net/parksandrecreation/images/3/3a/Swanson_Pyramid_of_Greatness.jpg/revision/latest?cb=20111014231319
//if answers are not correct, display a jean ralphio meme here is source- https://uproxx.files.wordpress.com/2015/06/j-ralph-dizzity.gif?w=650


/* here are the API's I'll be using 
-- OPEN API TRIVIA - https://opentdb.com/api.php?amount=10&category=14&difficulty=medium&type=multiple
-- GIPHY API 



*/ 






