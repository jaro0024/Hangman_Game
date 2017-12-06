
// need to end game, reset and restart while keeping the score
// need to stop remaining guesses at 0 (probably by ending the game, this will be fixed)




// Global variables
// ----------------------------------------------------

// Array of words
var wordsArray = ["baseball", "basketball", "football", "golf", "gymnastics", "handball", "hockey", "handball", "karate", "running", "sailing",
    "soccer", "swimming", "tennis", "volleyball"];

var randomWord;
var remainingGuesses = 6;
var guessedLetters = [];
var underscore = [];
var correctGuess = 0;
var wins = 0;
var losses = 0;
var guess;

// //To start game
function startGame() {
randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
console.log(randomWord);
for (var i = 0; i < randomWord.length; i++) {
    underscore.push('_');
    document.getElementById("current-word").innerHTML = underscore.join(" ");
}
}

// To get user's guesses and check if it is correct
document.onkeypress = function (event) {
    guess = String.fromCharCode(event.keyCode).toLowerCase();
    if (randomWord.indexOf(guess) > -1) {
        for (var i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === guess) {
                underscore[i] = guess;
                correctGuess++;
                winLose();
                document.getElementById("current-word").innerHTML = underscore.join(" ");
            }
        }
    }
    else {
        guessedLetters.push(guess);
        remainingGuesses--;
        winLose();
        document.getElementById("guessed-letters").innerHTML = guessedLetters;
        document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
    }
}

// Win / lose function

function winLose() {
    if (correctGuess === randomWord.length) {
        wins++;
        document.getElementById("total-wins").innerHTML = wins;
        // startGame();
    }

    else if (remainingGuesses === 0) {
        losses++;
        document.getElementById("total-losses").innerHTML = losses;
    }


}

// Reset the game



// Main 
// ------------------------------------------------------

startGame();



