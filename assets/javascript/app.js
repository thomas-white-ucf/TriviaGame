// +_ STEPS TO COMPLETE EASY HOMEWORK ASSIGNMENT

//  --- 1.   Create a start button, this button - starts timer and populates screen with timer, questions and answers buttons)

//  --- 2.   Make Timer that begins on button click, and that shows it counting down on the screen

//  --- 3.   Make a set of questions that appear on the screen at button click

//  --- 4.   Make a set of selectable answers appear on screen
//                    - only allow one answer at a time

//  --- 5.   Keep track of answers, compare them to correct answers

//  --- 6.   when timer is up show user how many questions they got correct or wrong

//  --- 7.
// ___________________________

var intervalId;
var number = 30;
var clockRunning;
let answersCorrect = 0;
let answersWrong = 0;
var numberOfQuestions = 4;

// This code will run as soon as the page loads
window.onload = function () {

    // Game Questions and Timer Count Down will Start when Button is Clicked
    $("#start").on("click", start);
};

function start() {
    // Clear Start button text, replace with Time Remaining + number Countdown
    $("#start").text("")
    $("#start").html("<h3>" + "Time Remaining " + number + "</h3>");

    // Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(run, 1000);
        clockRunning = true;
    }

    displayQuestions()

}

function displayQuestions() {

    $("#questionArea").html("Was Deadpool in Avengers End Game?")
    $("#answersArea1").html("Yes Silly")
    $("#answersArea2").html("No duhhh im Deadpool")

    $("#answersArea1").click(recordWrong)
    $("#answersArea1").click(loadQuestion2)
    $("#answersArea2").click(() => {
        recordCorrect();
        loadQuestion2();
    });
    // $("#answersArea2").click(loadQuestion2)
}

function loadQuestion2() {
    console.log('anser corect here', answersCorrect);
    $("#questionArea").html("Did Thanos do anything wrong?")
    $("#answersArea1").html("Reddit said no")
    $("#answersArea2").html("I am Groot")

    $("#answersArea1").click(recordWrong)
    $("#answersArea1").click(loadQuestion3)
    $("#answersArea2").click(() => {
       // recordCorrect();
        loadQuestion3();
    })
    //$("#answersArea2").click(loadQuestion3)

}


function loadQuestion3() {
    $("#questionArea").html("How many Marvel movies were before Avengers End Game?")
    $("#answersArea1").html("Less than 20")
    $("#answersArea2").html("More than 20 movies Wow!")

    $("#answersArea1").click(recordWrong)
    $("#answersArea1").click(loadQuestion4)
    $("#answersArea2").click(() => {
       // recordCorrect();
        loadQuestion4();
    })
   //$("#answersArea2").click(loadQuestion4)

}


function loadQuestion4() {
    $("#questionArea").html("When did the first Ironman Movie Released?")
    $("#answersArea2").html("May 2, 2008")
    $("#answersArea1").html("HULK SMASH!")

    $("#answersArea2").click(() => {
        //recordCorrect();
         endGame();
     })
    //$("#answersArea1").click(endGame)
    // $("#answersArea2").click(() => {
    //     //recordCorrect();
    //     endGame();
    // })
    //$("#answersArea2").click(endGame)

}

function endGame() {
    $("#questionArea").html("")
    $("#answersArea1").html("")
    $("#answersArea2").html("")

    clearInterval(intervalId);
    stop()
    number = 0

}


// RECORD CORRECT / INCORRECT ANSWERS
function recordCorrect() {
    answersCorrect++
    console.log("Correct answers_" + answersCorrect)
}
function recordWrong() {
    answersWrong++
    console.log("Wrong answers_" + answersWrong)
}


function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {

    number--;
    //  Decrease number by one.
    //  Show the number in the #start button tag.
    $("#start").html("<h3>" + "Time Remaining " + number + "</h3>");


    if (number === 0) {
        //  Once number hits zero...
        //  ...run the stop function.
        stop();
        clockRunning = false
        //  Alert the user that time is up.
        // alert("Time Up!");
    }
}

function stop() {
    //  Clears our intervalId
    //  We just pass the name of the interval -> to the clearInterval function.
    clearInterval(intervalId);
}




