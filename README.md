# Constructor Word Guess with Module Export/import

## Overview

This is a Word Guess command-line game using constructor functions with Module exporting and importing.

NPM will be required so make sure you do an npm install.

## Instructions

1. You will be given 10 guesses to guess the random word created from the random-words NPM
2. When you are ready to start type in "node index.js" while in the javascript folder.
3. Start guessing letters.
4. After all 10 tries are completed you will be asked if you want to try again.
    * Type Y or y to start again with a new word
    * Type N or n to end the game.

### Note

* There are no Numbers or Special Characters in any of the random words.

#### How the program works

1. There are three JavaScript files:
    * index.js
    * Letter.js
    * Words.js

##### Index.js

1. This file holds the logic for:
    * Starting the game.
    * Checking remaining guesses and taking the input through inquirer NPM.
    * A checkGuess function to validate if the guessed letter matches the a charcter in the random word.
    * A restart function.

2. This file also contains the NP requirements and file import of Words.js.

##### Letter.js

1. This holds the logic for adding the dashes and spaces.
2. This also holds a charcter check to validate if the letter guessed is the same as a letter in stringLetter
3. Exports the Letter module.

####### Words.js

1. Requires Letter.js.
2. This contains the logic for holding the random word.
    * Splits the random word into an array of letters
3. Has a method for looping and storing the guessed letter into the corect guessed position, if guessed correctly
4. Exports Word