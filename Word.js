// Contains a constructor, Word that depends on the Letter constructor. 
// This is used to create an object representing the current word the user is attempting to guess. 
// That means the constructor should define:


// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object 
// (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object 
// (the second function defined in Letter.js)

var Letter = require("./Letter.js")


// Word constructor that depends on the Letter constructor.
var Word = function (word) {
  console.log("")
  this.word = word.split("").map(letter => {
    return new Letter(letter)
  })
  this.numberGuesses = 8
  this.solved = false
  this.displayWord()

}



//We will need to display the word
Word.prototype.displayWord = function () {
  var display = this.word.map(letter => {
    return letter.getDisplay()
  }).join(" ")
  console.log(display)
}

//Has the player guessed the word? Let's check!
Word.prototype.checkSolved = function () {
  var guessedCount = 0
  this.word.forEach(letter => {
    letter.guessed ? guessedCount++ : null
  })
  if(guessedCount === this.word.length) {
    this.solved = true
  }
  return this.solved
}

//Have the letters been guessed? Let's check!
Word.prototype.checkGuess = function(a) {

  var test = false
  this.word.forEach(letter => {
    letter.guess(a) ? test = true : null
  })
  return test
}

module.exports = Word



//   this.lettersGuessed = []
// 	if (this.lettersGuessed.includes(a)) {
// 		console.log("   You already guessed that letter! Try again fool!");
// 		return false;
// 	}
	
// this.lettersGuessed.push(a);


