
var intervalId;
var number = 30;
var clockRunning;
let answersCorrect = 0;
let questionNumber = 0;
let answersWrong = 0;
var numberOfQuestions = 4;


var questionList = ['Is Deadpool from Marvel or DC comic books?', 'Did Thanos do anything wrong?',
    'How many Marvel movies were before Avengers End Game?', 'When was the first Ironman Movie Released?'];
var answerList1 = ['DC Comics', 'I am Groot', 'Less than 20', 'May 2, 2008'];
var answerList2 = ['Marvel Studios', 'Reddit said no', 'More than 20!', 'HULK SMASH!'];
var keyList = ['Marvel Studios', 'I am Groot', 'More than 20!', 'May 2, 2008']

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
    $("#questionArea").html(questionList[questionNumber]);
    $("#answersArea1").html(answerList1[questionNumber]);
    $("#answersArea2").html(answerList2[questionNumber]);

}


$("#answersArea1").click((e) => {
    // console.log('the text here', $(e.target).text());
    if ($(e.target).text() === keyList[questionNumber]) {
        console.log('this is True');
        recordCorrect();
    } else {
        console.log('this is False');
        recordWrong();
    }
});


$("#answersArea2").click((e) => {
    if ($(e.target).text() === keyList[questionNumber]) {
        console.log('this is True');
        recordCorrect();
    } else {
        console.log('this is False');
        recordWrong();
    }
});


// RECORD CORRECT / INCORRECT ANSWERS
function recordCorrect() {
    answersCorrect++;
    console.log(answersCorrect)
    questionNumber++;

    if (questionNumber > questionList.length) {

        // TODO~~~~~~~~~~FIX HOW THESE ARE DISPLAYED..
        // also Question 3 is not diplaying well

        $("#answersArea1").html("Answers Correct" + answersCorrect)
        $("#answersArea2").html("Answers Wrong" + answersWrong)

        endGame();
    } // if last question has been answered, end the game!
    else if (questionNumber >= 4) {
        endGame()
    }
    else {
        displayQuestions();
    }
}
function recordWrong() {
    answersWrong++;
    console.log(answersWrong)
    questionNumber++;

    if (questionNumber > questionList.length) {
        $("#questionArea").html("Answers Correct " + answersCorrect)
        $("#questionArea").append("Answers Wrong " + answersWrong)

        endGame();

    } // if last question has been answered, end the game!
    else if (questionNumber >= 4) {
        endGame()
    } else {
        displayQuestions();
    }
}

function endGame() {
    // DISPLAY CORRECT AND INCORRECT ANSWERS

    $("#questionArea").html("wrong answers" + answersWrong)
    $("#questionArea").append("right answers" + answersCorrect)

    $("#answersArea1").html("")
    $("#answersArea2").html("")

    clearInterval(intervalId);
    number = 0

}

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {

    number--;
    //  Decrease counting-number by one.
    //  Show the number in the #start button tag.
    $("#start").html("<h3>" + "Time Remaining " + number + "</h3>");

    //  Once number hits zero... ...run the endGame function.
    if (number === 0) {

        endGame();

    }
}





