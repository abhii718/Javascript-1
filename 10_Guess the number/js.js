let random = parseInt(Math.random() * 100 + 1);
console.log(random);

const submit = document.querySelector('#subt');
const useInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let preGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(useInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //
  if (isNaN(guess)) {
    alert('Please enter a valid number');
    useInput.value = '';
    
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    preGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over, Random number was ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //
  if (guess === random) {
    displayMessage('You guessed it right');
  } else if (guess < random) {
    displayMessage('Number is TOO low');
  } else if (guess > random) {
    displayMessage('Number is TOO high');
  }
}

function displayGuess(guess) {
  //
  useInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess + 1}`;
}

function displayMessage(message) {
  //
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  //
  useInput.value = '';
  useInput.setAttribute('disabled', true);
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');

  if (newGameButton) {
    newGameButton.addEventListener('click', function (e) {
      random = parseInt(Math.random() * 100 + 1);
      preGuess = [];
      // Remove the unused variable
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess}`;
      useInput.removeAttribute('disabled');
      startOver.removeChild(p);
      playGame = true;
    });
  }
}
