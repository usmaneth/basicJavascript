var Hangman = function() {

var words = [

"",
"",
"",
"",
"",
"",
""

];

var word = words[Math.floor(Math.random() * words.length)];
var remainingGuesses = 9;
var lettersGuessed = [];
var wrongLetters = [];
var wins = 0;
var losses = 0;

var updateRemainingGuesses = function() {
  document.querySelector("#remaining-guesses").innerHTML = remainingGuesses;
};

var updateLettersGuessed = function() {
  document.querySelector("#letters-guessed").innerHTML = lettersGuessed.join(", ");
};

var updateWrongLetters = function() {
  document.querySelector("#wrong-letters").innerHTML = wrongLetters.join(", ");
};

var resetGame = function() {
  remainingGuesses = 9;
  lettersGuessed = [];
  wrongLetters = [];
  word = words[Math.floor(Math.random() * words.length)];
};

var updateGameState = function() {
  updateRemainingGuesses();
  updateLettersGuessed();
  updateWrongLetters();
};

var makeGuess = function(letter) {
  if (lettersGuessed.indexOf(letter) === -1) {  
      lettersGuessed.push(letter);
      if (word.indexOf(letter) === -1) {
        remainingGuesses--;
        wrongLetters.push(letter);  
    }
  }

updateGameState();
checkGameStatus();

 };

var checkGameStatus = function() {
  if (remainingGuesses === 0) {
  losses++;
  alert("Sorry, you lost! The word was " + word);
  resetGame();
}

else if (word.split("").every(function(letter) {
  return lettersGuessed.indexOf(letter) !== -1;
})) {

wins++;
alert("Congratulations, you won!");
resetGame();

}
};

document.onkeydown = function(event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
  makeGuess(event.key);
}
};

};

Hangman();
