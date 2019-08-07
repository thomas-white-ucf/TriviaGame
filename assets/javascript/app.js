
let intervalId;
let number = 30;
let clockRunning;
let answersCorrect = 0;
let questionNumber = 0;
let answersWrong = 0;
let numberOfQuestions = 4;


let questionList = ['Is Deadpool from Marvel or DC comic books?', 'Who is Groot?',
    'How many Marvel movies were before Avengers End Game?', 'When was the first Ironman Movie Released?'];
let answerList1 = ['DC Comics', 'I am Groot!!', 'Less than 20', 'May 2, 2008'];
let answerList2 = ['Marvel Studios', 'A sentient and ambulatory plant-being', 'More than 20!', 'HULK SMASH!'];
// answer key
let keyList = ['Marvel Studios', 'I am Groot!!', 'More than 20!', 'May 2, 2008']

window.onload = function () {

    // onClick $("#start") > calls function start on click at window.onload
    $("#start").on("click", start);
};

// Start Timer onClick $("#start")
function start() {

    // display Trivia Questions
    displayQuestions()

    // Clear Start button text, replace with Time Remaining + number Countdown
    $("#start").text("")
    // $("#start").html("<h4>" + "Time Remaining " + number + "</h4>");

    timeLeftDiv =
        `<h4>Time Remaining ${number}</h4>
        `
    $("#start").append(timeLeftDiv)

    // Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(run, 1000);
        clockRunning = true;
    }

}

// displays current question/answers
function displayQuestions() {

    $("#questionArea").text(questionList[questionNumber]);
    $("#answersArea1").text(answerList1[questionNumber]);
    $("#answersArea2").text(answerList2[questionNumber]);
}

// start timer on click for game start - "Play Marvel Trivia!"
function run() {
    clearInterval(intervalId);
    // run function decrement on 1000 millisec intervals
    intervalId = setInterval(decrement, 1000);
}

// decremented time and display to user
function decrement() {
    //  Decrease counting-number by one.
    number--;
    //  Show the number in the #start button tag.
    $("#start").html("<h4>" + "Time Remaining " + number + "</h4>");

    //  Once number hits zero... ...run the endGame function.
    if (number === 0) {

        endGame();
    }
}

// ONCLICK > handle User button choice correct/wrong

// determine if answer 1 was correct
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

// determine if answer 2 was correct
$("#answersArea2").click((e) => {
    if ($(e.target).text() === keyList[questionNumber]) {
        console.log('this is True');
        recordCorrect();
    } else {
        console.log('this is False');
        recordWrong();
    }
});


// RECORD CORRECT ANSWERS
function recordCorrect() {
    answersCorrect++;
    console.log(answersCorrect)
    questionNumber++;

    if (questionNumber > questionList.length) {

        // if Game over, then display correct/wrong answers
        $("#answersArea1").html("Answers Correct" + answersCorrect)
        $("#answersArea2").html("Answers Wrong" + answersWrong)

        endGame();
    } // if last question has been answered, end the game!
    else if (questionNumber >= 4) {
        endGame()
    } // if questions array not completed, display next question
    else {
        displayQuestions();
    }
}

// RECORD INCORRECT ANSWERS
function recordWrong() {
    answersWrong++;
    console.log(answersWrong)
    questionNumber++;

    if (questionNumber > questionList.length) {

        endGame();

        // $("#questionArea").html("Answers Correct " + answersCorrect)
        // $("#questionArea").append("Answers Wrong " + answersWrong)

    } // if last question has been answered, end the game!
    else if (questionNumber >= 4) {
        endGame()
    } // if questions array not completed, display next question
    else {
        displayQuestions();
    }
}

// endGame called when time is up, or when all questions have been diplayed/answered
function endGame() {

    // clear question/answers
    $("#answersArea1").html("")
    $("#answersArea2").html("")
    $("#questionArea").html("")

    // stop interval counter
    clearInterval(intervalId);
    number = 0

    // DISPLAY CORRECT AND INCORRECT ANSWERS
    resultDiv =
        ` <div>
               <h2>Correct answers ${answersCorrect}</h2>
               <h2>Wrong answers ${answersWrong}</h2>
          </div>
        `
    // display results
    $("#questionArea").append(resultDiv)

    // TODO:
    // Give option to restart game
    // Make function to restart game
    // $("#start").on("click", start);
}






