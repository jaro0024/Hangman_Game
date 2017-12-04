
// Global variables

// Array of words

var words = ["baseball", "basketball", "football", "golf", "gymnastics", "handball", "hockey", "handball", "karate", "running", "sailing",
"soccer", "swimming", "tennis", "volleyball"];


var wins = 0;

var currentWord = [];
var guessedLetters = [];
var underscore = [];

// Choose words randomly

var randomWord = words[Math.floor(Math.random() * words.length)];

console.log(randomWord);

// Main

// Create underscore based on word's length

var generateUnderscore = function () {
    for(i = 0; i < randomWord.length; i++) {
        underscore.push('_');
    }
    return underscore;
}

console.log(generateUnderscore());

// Get user's guess 

document.onkeypress = function(event) {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();

// Check if guess is correct

    if(randomWord.indexOf(letter) > -1) {
        currentWord.push(letter);
            console.log(currentWord);

// If correct, replace underscore with letter
        underscore[randomWord.indexOf(letter)] = letter;
            console.log(underscore);

            if(underscore.join('') == randomWord) {
                alert("You Win!");
            }
    }

// If incorrect, show the letter as letters guessed
    else {
        guessedLetters.push(letter);
            console.log(guessedLetters);
    }

};



// var str = 'To be, or not to be, that is the question.';
// var count = 0;
// var pos = str.indexOf('e');

// while (pos !== -1) {
//   count++;
//   pos = str.indexOf('e', pos + 1);
// }

// console.log(count); // displays 4 


// If word is correct, increase win number  







    



