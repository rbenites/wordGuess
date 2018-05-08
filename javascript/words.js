/* Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
    - An array of new Letter objects representing the letters of the underlying word
    - A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    - A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
*/

//====file import====//
var letterImport = require("./Letter.js");
//save data from Letter Obj constructor in Letter.js into Letter var
var Letter = letterImport.Letter;

//object constructor
function Word(word) {
    this.letterArr = [];
    //splits the random word and stores each letter in the letterArr aray
    for (var i = 0; i < word.split("").length; i++) {
        var newLetter = new Letter(word[i]);
        this.letterArr.push(newLetter);
    }

    this.string = function () {
        var wordString = [];
        //for loop to iterate through letterArr aray
        for (var i = 0; i < this.letterArr.length; i++) {
            wordString.push(this.letterArr[i].letterGuessed());
        }
        return wordString.join("");
    };
    this.guess = function (keyChar) {
        //for loop to iterate through letterArr aray and takes the users input calling to inputChar in Letter.js
        for (var i = 0; i < this.letterArr.length; i++) {
            this.letterArr[i].inputChar(keyChar);
        }
    };
}

module.exports = {
    Word: Word
};