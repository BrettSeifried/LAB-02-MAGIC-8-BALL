// import functions and grab DOM elements
const button = document.getElementById('submit');
const button1 = document.getElementById('submit1');
const button2 = document.getElementById('submit2');
const button3 = document.getElementById('submit3');
const exercise = document.getElementById('answer');
// const boxs = document.getElementById('box');
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
import { repitions } from './answers.js';
// import { multi } from './answers.js';

  // to generate a rnadom color from the array
  // generate a random number between 0 and 2
  // in other words generate random index
const getRandomNumber = (max) =>{
    return Math.floor(Math.random() * max);
};

button.addEventListener('click', () => {
    const randomIndex = getRandomNumber(upper.length);
    const answer = document.getElementById('answer');
    answer.textContent = upper[randomIndex];

    const randomRep = getRandomNumber(repitions.length);
    const reps = document.getElementById('reps');
    reps.textContent = repitions[randomRep];
});
button1.addEventListener('click', () => {
    const randomIndex1 = getRandomNumber(lower.length);
    const answer1 = document.getElementById('answer1');
    answer1.textContent = lower[randomIndex1];

    const randomRep1 = getRandomNumber(repitions.length);
    const reps1 = document.getElementById('reps1');
    reps1.textContent = repitions[randomRep1];
});

button2.addEventListener('click', () => {
    const randomIndex2 = getRandomNumber(cardio.length);
    const answer2 = document.getElementById('answer2');
    answer2.textContent = cardio[randomIndex2];

    const randomRep2 = getRandomNumber(repitions.length);
    const reps2 = document.getElementById('reps2');
    reps2.textContent = repitions[randomRep2];

});

button3.addEventListener('click', () => {
    const randomIndex3 = getRandomNumber(core.length);
    const answer3 = document.getElementById('answer3');
    answer3.textContent = core[randomIndex3];

    const randomRep3 = getRandomNumber(repitions.length);
    const reps3 = document.getElementById('reps3');
    reps3.textContent = repitions[randomRep3];

}); 
exercise.style.display = 'block';


// countdown timer to be defined by user at a later date

// function timerDisplay (){
//   let sec = result1
//   let timer = setInterval(function(){
//     document.getElementById('timerDisplay').innerHTML='00:'+sec;
//     sec--;
//     if (sec < 0) {
//       clearInterval(timer);
//     }
//   }, 1000);
// };

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