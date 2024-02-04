'use strict';

/* MY VERSION */
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const number = document.querySelector('.number');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const secretNumber = Math.floor(Math.random() * (20 - 1 + 1) + 1);

const displayMessage = mess => (message.textContent = mess);
const displayNumber = numberr => (number.textContent = numberr);
const displayScore = scoree => (score.textContent = scoree);
const displayHighScore = highscore => (highScore.textContent = highscore);

let defaultScore = 20;
let defaultHighScore = 0;
let arr = [];
let localArr = localStorage.getItem('arr');
// localStorage.clear();

console.log(secretNumber);

console.log(localArr);

displayHighScore((localArr = 0 ? 0 : localArr));

btnCheck.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);

  // Saat tebakan kosong
  if (!guess) {
    displayMessage('⛔ No Number!');
  }

  // Saat tebakan benar
  else if (guess == secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber);
    document.body.style.background = '#60b347';
    number.style.width = '30rem';

    console.log(defaultScore);
    console.log(defaultHighScore);

    if (defaultScore > defaultHighScore) {
      arr.push(defaultScore);
      console.log(score);
      console.log(arr);

      displayHighScore(arr[arr.length - 1]);
      localStorage.setItem('arr', arr);
    }
  }

  // Saat tebakan salah
  else if (guess !== secretNumber) {
    console.log(defaultScore);

    // Saat skor/kesempatan menebak tersedia
    if (defaultScore > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      defaultScore--;
      displayScore(defaultScore);
    }

    // Saat skor habis/kesempatan menebak
    else {
      displayScore('0');
      displayMessage('🗿 Loserrr!');
      document.body.style.background = 'red';
    }
  }
});

btnAgain.addEventListener('click', () => location.reload());
