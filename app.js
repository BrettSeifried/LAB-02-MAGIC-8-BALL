// import functions and grab DOM elements
const button = document.getElementById('submit');
const counter = document.getElementById('time');
const exercise = document.getElementById('answer');
// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


// const colors = ['red', 'purple', 'blue'];

// import { answers } from './answers.js';
import { upper } from './answers.js';
import { lower } from './answers.js';
import { cardio } from './answers.js';
import { core } from './answers.js';
import { multi } from './answers.js';

  // to generate a rnadom color from the array
  // generate a random number between 0 and 2
  // in other words generate random index
const getRandomNumber = (max) =>{
    return Math.floor(Math.random() * max);
};

button.addEventListener('click', () =>{
  const randomIndex = getRandomNumber(upper.length);
  const answer = document.getElementById('answer');
  answer.textContent = upper[randomIndex];

  const randomIndex1 = getRandomNumber(lower.length);
  const answer1 = document.getElementById('answer1');
  answer1.textContent = lower[randomIndex1];

  const randomIndex2 = getRandomNumber(cardio.length);
  const answer2 = document.getElementById('answer2');
  answer2.textContent = cardio[randomIndex2];

  const randomIndex3 = getRandomNumber(core.length);
  const answer3 = document.getElementById('answer3');
  answer3.textContent = core[randomIndex3];

  exercise.style.display = 'block';

  timerDisplay()


});

function timerDisplay (){
  let sec = multi
  let timer = setInterval(function(){
    document.getElementById('timerDisplay').innerHTML='00:'+sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
    }
  }, 1000);
};

// EXAMPLE
// const randomIndex = getRandomNumber(colors.length);
// console.log(colors[randomIndex]);

// const randomAnswer = getRandomNumber(answers.length);
// console.log(answers[randomAnswer]);

// const header = document.getElementById('my-header');
// header.style.color = colors[randomIndex];

// const answer = document.getElementById('answer');
// answer.textContent = answers[randomAnswer];

// function timer (){
//   let sec = 30;
//   let timer = setInterval(function(){
//     document.getElementById('timerDisplay').innerHTML='00:'+sec;
//     sec--;
//     if (sec < 0) {
//       clearInterval(timer);
//     }
//   }, 1000);
// };