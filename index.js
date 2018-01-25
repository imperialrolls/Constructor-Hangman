// The file containing the logic for the course of the game, which depends on Word.js and:


// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses


var Word = require("./Word.js")
var inquirer = require("inquirer")

//this is our array of words
var arrayWords = ["Arugula", "Cabbage", "Fiddlehead", "Mizuna Greens", "Radicchio", "Yarrow", "Lemongrass", "Shallot", "Horseradish"]

//let's pick a fresh vegetable from our word array! 
var freshWord = getNewWord()
cliPrompt()

//CLI inquirer 
function cliPrompt() {
  console.log("")

  //prompt the player to guess a letter then validate
  inquirer.prompt([{

    message: "Do you know your vegetables? Well then guess a letter!",
    name: "userGuess",
    validate: (guess) => {
      return (/[a-zA_Z]/).test(guess) ? true : console.log("  >Not so much.")
    }

  }]).then(answers => {

    console.log("")
	// if the player's guess matches then do this
    var gameGuess = answers.userGuess.match(/([a-zA-Z])/)

    if (freshWord.checkGuess(gameGuess[0])) {
	// and display this
      console.log("   You're strong to the finish, 'cause you eats your Spinach!")
 	//if the player's guess does not match then do this
    } else {
	// and display this
      console.log("  Nope! Eat more greens and try again!")
      freshWord.numberGuesses--
      console.log(`You only have ${freshWord.numberGuesses} guesses left`)
      
    }
    console.log("")
    freshWord.displayWord()

    if (freshWord.numberGuesses > 0) {

      if (freshWord.checkSolved()) {
  
        playAgain()
      }
      else {

        cliPrompt()
      }
    } else {
      console.log("\n   Game Over Potato Head!")
      playAgain()
    }
  })
}


// when our player completes the game we will inquire whether they would like to play again via Y/N?
function playAgain() {
  console.log("")

  inquirer.prompt([{

    message: "Play Again",
    name: "playAgain",
    type: "confirm"

  }]).then(answers => {

    if (answers.playAgain) {
      freshWord = getNewWord()
      cliPrompt()
    }
  })
}

//let's get a new vegetable by randomly selecting one from our word array.
function getNewWord() {
  var randNum = Math.floor(Math.random() * 6)
  return gameWord = new Word(arrayWords[randNum])
}











