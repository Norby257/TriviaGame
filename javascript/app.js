
//Pseudocode 

//check if files are linked correctly 
console.log("we are linked");

//global variables to hold time and score



//get document ready 
$(document).ready(function() {
    console.log("I'm ready");

            //global vars 
            var count; 
            var score;
            var timer; 
            var duration = 5;
            $(".timer").html("<h1> " + duration + "</h1>");
             //set timer to 1:20 on page 
        // $(".timer").text("1:20");
        // //Get timer to start counting down 
        // function countDown() {
        //     //count down one second at a time 
        //     invervalId = setInterval(decrement, 1000);
            //show the questions 
            //disable the button after it's clicked 
            

    $("#start").click(function() {
        console.log("Yay, you started the game");
        var question1 = $("<p> What is the name of Andy Dwyer's band? </p>");
        $(".questions").append(question1);
        var question2 = $("<p> what is the name of Tom Haverford's bar? </p>");
        $(".questions").append(question2);
        var question3 =$("<p> which of the following is not a Jean Ralphio quote? </p>");
        $(".questions").append(question3);
        var question4 =$("<p> What is Chris's trademarked burger?</p>");
        $(".questions").append(question4);
        var intervalId = setInterval(function() {
            duration--;
            $(".timer").html("<h1> " + duration + "</h1>");            
            if (duration === 0) {
                //alert 
                alert("the game is over!");
                clearInterval(intervalId);
                $("#start").prop("disabled", false);
                duration = 5;
                $(".timer").html("<h1> " + duration + "</h1>");            
                
                
            }

        },1000);
        $(this).prop("disabled", true);


    
  
    

    });

});

    

        



       


        
        

        
//while timer is greater than 0, 


// dynamically update the DOM to display questions and radio buttons 

//user can only select one radio button for each question
///and then have a submit function to compare the value 
//single comparison 

//how to check if answers are correct? store correct answers and compare them 









//once timer is zero, do the following:
//display all done!$("document").on("ready", function() {


        //show the questions 


        //set timer to 1:20 on page 
        // $(".timer").text("1:20");
        // //Get timer to start counting down 
        // function countDown() {
        //     //count down one second at a time 
        //     invervalId = setInterval(decrement, 1000);


        
        

        
//while timer is greater than 0, 


// dynamically update the DOM to display questions and radio buttons 

//user can only select one radio button for each question
///and then have a submit function to compare the value 
//single comparison 

//how to check if answers are correct? store correct answers and compare them 









//once timer is zero, do the following:
//display all done!
//display correct answers: score 
//display incorrect answers: score
//display unanswered: score

//nice to have - sound effect if all answers are correct
//nice to have - picture of ron swanson pyramid of greatness if all answers are correct
//and maybe also that quote from jean ralphio ".... in all of pawnee"
//here is the src for ron swanson https://vignette4.wikia.nocookie.net/parksandrecreation/images/3/3a/Swanson_Pyramid_of_Greatness.jpg/revision/latest?cb=20111014231319
//if answers are not correct, display a jean ralphio meme here is source- https://uproxx.files.wordpress.com/2015/06/j-ralph-dizzity.gif?w=650











