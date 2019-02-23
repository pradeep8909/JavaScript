// Chosing difficulty
var difi = String(prompt('Choose Difficulty : \nEasy\nMedimu\nHard\nIf you give an invalid input the the difficulty will set to hard by default.'))
if (difi.toLowerCase() === 'easy'){
	var lives = 9;
}else if(difi.toLowerCase() === 'medium'){
	var lives = 6
}else{
	var lives = 3
}
// getting all letters
var availableLetters = []
console.log(lives)
for (var i = 97 ; i < 123; i++){
	availableLetters.push(String.fromCharCode(i));
}
console.log(availableLetters);
secWord = 'coot'
var wordList = []
for(i = 0 ;i < secWord.length;i++){
	wordList[i] = "-";
}
console.log(wordList)
// function Guess(letter,secWord){
// 	for each
// }
for ( i = 0; lives != -1 ; i++){
	if(lives === 0){
		lives = lives - 1
		alert('You Lost!');
		document.write('<h2>You Lost!</h2>');
		break;
	}
	if(wordList.join("") === secWord){
		alert('You Won!');
		document.write('<h2>You Won!</h2>')
		break;
	}
	var guess = prompt('Please Guess a Letter : \n');
	if (secWord.indexOf(String(guess)) != -1){
		alert('Your guess was Correct\nLives Left : ' + lives);
		for(var x = 0 ; x < secWord.length; x++){
			if (secWord[x] === String(guess)){
				wordList[x] = String(guess);
			} 
		}
		document.write('<h3>' + wordList + '<h3>');
	}else{
		lives = lives - 1 
		alert('Please try again\nLives Left : ' + lives);
	}
}