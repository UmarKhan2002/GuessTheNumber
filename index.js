const guessBtn = document.getElementById("guessBtn");
const giveUpBtn = document.getElementById("giveUpBtn"); 
const playAgainBtn = document.getElementById("playAgainBtn");

const winResult = document.getElementById("winResult");
const highResult = document.getElementById("highResult");
const lowResult = document.getElementById("lowResult");

const minNum = 1;
const maxNum = 100;
let playGame = true;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0; // Corrected spelling (attempts)

function validateGuess() {
  let guess = Number(document.getElementById("guessField").value);

  if (isNaN(guess)) {
    window.alert("Please enter a valid number");
  } else if (guess < minNum || guess > maxNum) {
    window.alert("Please enter a valid number between 1 and 100");
  } else {
    attempts++;
    if (guess < answer) {
      lowResult.textContent = `TOO LOW! TRY AGAIN!`;
      highResult.textContent = ""; 
    } else if (guess > answer) {
      highResult.textContent = `TOO HIGH! TRY AGAIN!`;
      lowResult.textContent = ""; 
    } else {
      winResult.textContent = `Hurray!! You guessed it. The answer was ${answer}. It took you ${attempts} attempts.`;
      playGame = false; 
    }
  }
}


guessBtn.onclick = validateGuess;

giveUpBtn.onclick = function() {
  winResult.textContent = `The answer was ${answer}.`;
  playGame = true;
  attempts = 0;
  lowResult.textContent = "";
  highResult.textContent = "";
};

playAgainBtn.onclick = function() {
  // Reset game
  answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  playGame = true;
  attempts = 0;
  winResult.textContent = "";
  lowResult.textContent = "";
  highResult.textContent = "";
};
