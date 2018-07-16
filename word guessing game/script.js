const wordToGuess = 'banana';

const wordStatus = [];

let guessesLeft = 10;

const prevGuesses = [];



function displayWordStatus(Status){
let output = '';
	for(let i=0; i < Status.length; i++){
		const char = Status[i];

		output = output + char;
		output = output + ' ';
	}

wordStatusContainer = document.getElementById('word');
wordStatusContainer.innerHTML = output;
}

function displayGuessesLeft(num){
	document.getElementById('guesses-left').innerHTML = num;
}

let list = document.getElementById('past-guesses');

function guess(wordToGuess, wordStatus, currGuess){
	for(let i = 0; i < wordToGuess.length; i++){
		if(wordToGuess[i] == currGuess){
			wordStatus[i] = currGuess;
		}
	}

	displayWordStatus(wordStatus);
}


function displayPreviousGuesses(guessesArray){
	list.innerHTML = '';
	for(let i = 0; i < guessesArray.length; i++){
		const guess = document.createElement('li');
		guess.innerHTML = guessesArray[i];
		list.appendChild(guess);
	}
}


const form = document.getElementById('player-input');
const input = document.getElementById('player-guess');


function validateInput(guess, prevGuesses){
	if(guess.length == 1 && prevGuesses.indexOf(guess) == -1){
		return true;
	}
	 {return false;
	}
}
let won = checkWon(wordStatus);
function checkWon(wordStatus){
	let Blank = false;
	for(let i = 0; i < wordStatus.length; i++){
		
		if(wordStatus[i] == '_'){
			Blank = true;
		}
	}
	return !Blank;
}

//submit handler
form.onsubmit = function (event){
	event.preventDefault();
	const currentInput = input.value;
	if(!validateInput(currentInput,prevGuesses)){
		window.alert('type properly lah')
	}
	prevGuesses.push(currentInput);
// minus lives (guessesleft)
	guessesLeft = guessesLeft - 1
	displayGuessesLeft(guessesLeft)
//make guess
	guess(wordToGuess, wordStatus, currentInput);
//Update word status including the current 'guessed' word	
	displayPreviousGuesses(prevGuesses)
	input.value = ''
		if(won=true) {
		window.alert('yay')
	}
		else if(guessesLeft == 0){
		window.alert('loser')
	}

	
}


function setup(){
for(let i = 0; i < wordToGuess.length; i++){
	wordStatus.push('_');
}

displayWordStatus(wordStatus)
displayGuessesLeft(guessesLeft)
displayPreviousGuesses(prevGuesses)
}

setup();