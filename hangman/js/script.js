function diffSubmit() {
  var difficulty = document.getElementById("diff").value;
  return difficulty;
}
function getSecretWord() {
  var secWord = "coot";
  return secWord;
}
function guessLetter() {
  var guess = document.getElementById("guess").value;
  return guess;
}
function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
function isWordGuessed(secretWord, guessedWord) {
  if (String(secretWord) === String(guessedWord)) {
    return true;
  }
  return false;
}
function getGuessedWord(secretWord, lettersGuessed) {
  var index = 0;
  var guessedWord = "";
  while (index < secretWord.length) {
    if (secretWord[index] in lettersGuessed) {
      guessedWord += secretWord[index];
    } else {
      guessedWord += "_";
    }
  }
  return guessedWord;
}
function getAvailableLetters(lettersGuessed) {
  var letters = "";
  for (var i = 97; i < 123; i++) {
    letters += String.fromCharCode(i);
  }
  var lettersLeft = "";
  for (var letter in letters) {
    if (lettersGuessed.indexOf(letter) === -1) {
      lettersLeft += letter;
    }
  }
  return lettersLeft;
}
function getHint(secretWord, letterGuessed) {
  var hintarray = [];
  for (letter in secret_word) {
    if (letterGuessed.indexOf(letter) === -1) {
      hintList.push(letter);
    }
  }
  return choose(hintList);
}
function hangman(secretWord) {
  console.log("Hangman");
  document.write("<h1>Welcome to the game, Hangman</h1>");
  document.write("<h3>Enter Difficulty : Easy, Medium or Hard </h3>");
  document.write(
    '<form id="Difficulty form"><input type="text" id = "diff" ><button type="button" onclick="diffSubmit()" class = "button">Select</button></form>'
  );
  var difficulty = diffSubmit();
  if (difficulty.toLowerCase() === "easy") {
    var lives = 10;
    var livesArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  } else if (difficulty.toLowerCase() === "medium") {
    var lives = 6;
    var livesArray = [0, 2, 4, 5, 7, 8, 10];
  } else {
    var lives = 3;
    var livesArray = [0, 4, 7, 10];
  }
  var lettersGuessed = [];

  while (true) {
    if (lives === 0) {
      document.write("<h2>Remaining Lives : 0</h2>");
      document.write("<h2>You Lost!</h2>");
      document.write("<h2>The word was " + secretWord + ".</h2>");
      break;
    }
    document.write(
      '<form id="Guessing form"><input type="text" id = "guess" ><button type="button" onclick="guessLetter()" class = "button">Guess</button></form>'
    );
    var guessedLetter = guessLetter();
    if (secretWord.indexOf(guessedLetter) != -1) {
      lettersGuessed.push(guessedLetter);
      guessedWord = getGuessedWord(secretWord, lettersGuessed);
      if (isWordGuessed(secretWord, guessedWord) === true) {
        document.write("<h1>You Won!</h1>");
        return;
      }
    } else {
      var picture = livesArray[image];
      image += 1;
			lives -= 1;
      document.write('<img src = "images/"' + picture + ".jpg</h2>");
      document.write("<h2>Please try again!</h1>");
      break;
    }
  }
}
secretWord = getSecretWord();
hangman(secretWord);
