/* index.js: The file containing the logic for the course of the game, which depends on words.js and:
    - Randomly selects a word and uses the Word constructor to store it
    - Prompts the user for each guess and keeps track of the user's remaining guesses
*/

//====NPMs====//
var randomWords = require("random-words");
var inquirer = require("inquirer");
//====file import====//
var wordImport = require("./words.js");

//store import from Word.js
var Word = wordImport.Word;
//variables for remainng guesses, word to guess, and the guess count
var remainingGuesses;
var wordToGuess;
var count = 0;

startGuessing();


//Function stores random word from random-words NPM into wordTo Guess and set number of guess the user has
function startGuessing() {
    wordToGuess = new Word(randomWords());
    remainingGuesses = 10;
    //calls the function to start the game
    playGame();
}

//function that starts the game
function playGame() {
    //if statement to check if the remaining guess is greateer than 0 if it is the inquirer displays the message and allows the user to enter a letter
    if (remainingGuesses > 0) {
        inquirer.prompt([
            {
                name: "letter",
                message: "Guess a letter. You have " + remainingGuesses + " guesses left."

            }
            //once the letter is typed the .then stores the guess, reduces guesses by 1 and then calls the checker function
        ]).then(function (answers) {
            wordToGuess.guess(answers.letter);
            console.log("\n" + wordToGuess.string() + "\n");
            remainingGuesses--;
            checkGuess();
        });
        //else if the guesses remaining are less than or equal to 0 display the word that was to be guessed and then calls the function to restart the game if the user wants
    } else {
        var wordDisplay = [];
        for (var i = 0; i < wordToGuess.letterArr.length; i++) {
            wordDisplay.push(wordToGuess.letterArr[i].stringLetter);
        }
        console.log("You lose!");
        console.log("\nThe word you missed was: " + wordDisplay.join("") + "\n");
        restart();
    }
}

//this checks if the user has guessed the correct number of letters compared to the word length
function checkGuess() {
    var letterArr = wordToGuess.letterArr;
    var corrects = 0;
    //adds 1 to corrects var if the letter guessed was correct
    for (var i = 0; i < letterArr.length; i++) {
        if (letterArr[i].guessed === true) {
            corrects++;
        }
    }
    //if corrects is equal to the length of the word then the user wins and the restart function is called
    if (corrects === letterArr.length) {
        console.log("You win!");
        restart();
        //if corrects is is not equal to the word lenght then the playGame function is called
    } else {
        playGame();
    }
}

//this prompts the user to confirm if they want to restart the game or not
function restart() {
    inquirer.prompt([
        {
            name: "continue",
            message: "Continue? (Y/N)"
        }
    ]).then(function (answers) {
        if (answers.continue === "Y" || answers.continue === "y") {
            startGuessing();
        } else {
            process.exit();
        }
    });
}