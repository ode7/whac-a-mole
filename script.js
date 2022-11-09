const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let hitSquare;
let result = 0;
let currentTime = 60;
let timeId = null;
function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove('mole');
  });
  let randomPosition = squares[Math.floor(Math.random() * 9)];
  randomPosition.classList.add('mole');
  hitSquare = randomPosition.id;
}
squares.forEach((square) => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitSquare) {
      result++;
      score.textContent = result;
      hitSquare = null;
    }
  });
});
function moveMole() {
  timeId = setInterval(randomSquare, 500);
}

moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownId);
    clearInterval(timeId)
    alert('Your final score is ' + result);
  }
}
let countDownId = setInterval(countDown, 1000);
