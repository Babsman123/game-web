'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'correct Number';

// // document.querySelector('.number') = 13;
// // document.querySelector;

// const sum = [];
// for (let i = 0; i < 6; i++) {
//   sum.push(i);
// }
// console.log(sum);
let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  //if  the input is blank
  if (!guess) {
    displayMessage('No number');
  }
  //if the input is equal to the secret number
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }
  //when guess is not equal
  if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage;
      guess > secretNumber ? 'Number Too Hogh' : 'Number too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  //when guess is too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Number too High';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  //   //when guess is too low
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Number too Low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Now guessing';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
});
