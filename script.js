'use strict';
// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent='Score';
// document.querySelector('.number').textContent=14;
// document.querySelector('.highscore').textContent=22;
// console.log(document.querySelector('.guess'));
// console.log(document.querySelector('.guess').value);
// document.querySelector('.check').addEventListener('click',()=>console.log(document.querySelector('.guess').value)); //function(){
// console.log(document.querySelector('.guess').value);
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = Number(document.querySelector('.score').textContent);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.again').textContent = 'Play Again!';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.again').textContent = 'Play Again!';
    }
  } else {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.body.style.backgroundColor = 'rgb(96, 179, 71)';
    document.querySelector('.highscore').textContent = score;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.again').textContent = 'Play Again!';
  }
});
document.querySelector('.again').addEventListener('click', () => {
  window.location.reload();
});
