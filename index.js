var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
];


var wordToGuessElement = document.getElementById('word-to-guess');
var previousWordElement = document.getElementById('previous-word');
var incorrectLettersElement = document.getElementById('incorrect-letters');
var remainingGuessesElement = document.getElementById('remaining-guesses');
var winsElement = document.getElementById('wins');
var lossesElement = document.getElementById('losses');
var scoreElement = document.getElementsByClassName('score');

var wins = 0;
var losses = 0;
var remainingGuesses = 10;
var currentWord = '';
var displayedWord = '';
var previousWord = '';
var incorrectLetters = [];
var guessedLetters = [];

var randomWords = document.querySelectorAll('li.words');

if (randomWords.length > 0) {
  for (var i = 0; i < randomWords.length; i++) {
    randomWords[i].textContent = words[i];
  }
}

var wordGuessed = Math.floor(Math.random() * words.length);
currentWord = words[wordGuessed];
displayedWord = '_'.repeat(currentWord.length);
wordToGuessElement.textContent = displayedWord;
previousWordElement.textContent = previousWord;
remainingGuessesElement.textContent = remainingGuesses;
incorrectLettersElement.textContent = incorrectLetters.join(', ');
winsElement.textContent = wins;
lossesElement.textContent = losses;

function updateDisplay() {
  wordToGuessElement.textContent = displayedWord;
  previousWordElement.textContent = previousWord;
  incorrectLettersElement.textContent = incorrectLetters.join(', ');
  remainingGuessesElement.textContent = remainingGuesses;
  winsElement.textContent = wins;
  lossesElement.textContent = losses;
}


function playGame() {}


