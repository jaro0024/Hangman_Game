
// Global variables
// ----------------------------------------------------

// Array of words
var wordsArray = ["baseball", "basketball", "football", "golf", "gymnastics", "handball", "hockey", "handball", "karate", "running", "sailing",
    "soccer", "swimming", "tennis", "volleyball"];

var randomWord;
var remainingGuesses = 6;
var wrongLetters = [];
var underscore = [];
var wins = 0;
var losses = 0;
var guess;

// //To start game
function startGame() {
    randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    for (var i = 0; i < randomWord.length; i++) {
        underscore.push('_');
    }
    document.getElementById("current-word").innerHTML = underscore.join(" ");
}

// To get user's guesses and check if it is correct. If it is correct, it replaces the underscore with the letter and correct guesses goes up by 1.
document.onkeypress = function (event) {
    guess = String.fromCharCode(event.keyCode).toLowerCase();      
    if (randomWord.indexOf(guess) > -1) {
        for (var i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === guess) {
                underscore[i] = guess;
                winLose();
            }
        }
        document.getElementById("current-word").innerHTML = underscore.join(" ");
    }

    // If the letter guessed is wrong, it goes to the wrongLetters array and remaining guesses decrease by 1. That letter cannot be guessed again.
    else {
        for (i = 0; i < wrongLetters.length; i++) {
            if (wrongLetters[i] === guess) {
                return;
            }
        }
        wrongLetters.push(guess);
        remainingGuesses--;
        winLose();
        document.getElementById("wrong-letters").innerHTML = wrongLetters.join(" ");
        document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
    }
}

// Win / lose function

// If correct guess count matches the length of the random word to be guessed, player wins. Wins count goes up, the game resets and restarts.
function winLose() {

    if (underscore.join("") === randomWord) {
        wins++;
        document.getElementById("total-wins").innerHTML = wins;
        resetGame();
    }
    // If remaining guesses goes down to 0, player loses. Losses count goes up, the game resets and restarts.
    if (remainingGuesses === 0) {
        losses++;
        document.getElementById("total-losses").innerHTML = losses;
        resetGame();
    }
}

// Reset and restart game, but keeping the score

function resetGame() {
    randomWord = "";
    remainingGuesses = 6;
    wrongLetters = [];
    underscore = [];
    document.getElementById("current-word").innerHTML = "";
    document.getElementById("wrong-letters").innerHTML = "";
    document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
    startGame();
}

// Main
// ------------------------------------------------------

// Calling function to start game
startGame();
