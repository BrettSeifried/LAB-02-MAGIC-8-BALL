// import functions and grab DOM elements

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


const colors = ['red', 'purple', 'blue']

import { answers } from './answers.js';

  // to generate a rnadom color from the array
  // generate a random number between 0 and 2
  // in other words generate random index
const getRandomNumber = (max) =>{
    return Math.floor(Math.random() * max);
};
const randomIndex = getRandomNumber(colors.length);
console.log(colors[randomIndex]);

const randomAnswer = getRandomNumber(answers.length);
console.log(answers[randomAnswer]);

const header = document.getElementById('my-header');
header.style.color = colors[randomIndex];

const answer = document.getElementById('answer');
answer.textContent = answers[randomAnswer];