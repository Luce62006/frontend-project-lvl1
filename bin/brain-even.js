#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { GetName } from '../cli.js';

console.log('Welcome to the Brain Games!');
const name = GetName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gameInThreeQuestions = () => {
  for (let i = 1; i < 4; i += 1) {
    const question = getRandomNum(1, 100);
    console.log(`Question: ${question}`);
    const theCorrectAnswer = (question % 2 === 0) ? 'yes' : 'no';
    const answerOfUser = readlineSync.question(`Your answer: ${''}`);
    if (answerOfUser === theCorrectAnswer) {
      console.log('Correct!');
    } else {
      console.log((`"${answerOfUser}"is wrong answer. Correct answer was" ${theCorrectAnswer}".
    Let's try again, ${name}!`));
      return;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

gameInThreeQuestions();
