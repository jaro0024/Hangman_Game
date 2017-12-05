
// Global variables
// ----------------------------------------------------

// Array of words
var words = ["baseball", "basketball", "football", "golf", "gymnastics", "handball", "hockey", "handball", "karate", "running", "sailing",
"soccer", "swimming", "tennis", "volleyball"];

var randomWord;
var remainingGuesses = 6;
var currentWord = [];
var guessedLetters = [];
var underscore = [];
var userGuesses =[];
var winCount = 0;
var lossCount = 0;

//To start game
function startGame() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWord);
    for(var i = 0; i < randomWord.length; i++) {
        underscore.push('_');
    }
    document.getElementById('current-word').textContent = underscore.join(" ");
    document.getElementById('remaining-guesses').textContent = remainingGuesses;
}

// To get user's guesses
document.onkeypress = function(event) {
    userGuesses = String.fromCharCode(event.keyCode).toLowerCase();

    if(randomWord.indexOf(userGuesses) > -1) {
        for(var i = 0; i < randomWord.length; i++) {
            if(randomWord[i] === userGuesses)
            {
                underscore[i] = userGuesses;
                console.log(underscore);
            }
        }
    }
    else {
        guessedLetters.push(userGuesses);
            remainingGuesses--;
            console.log(guessedLetters);
    }
}

// Win / lose 

function winLose() {
    

// Main 
// ------------------------------------------------------
startGame();











    



