#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { GetName } from '../cli.js';

console.log('Welcome to the Brain Games!');
const name = GetName();
console.log('What is the result of the expression?');
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getSignOfMathOperation = (mathSign) => (
  mathSign.charAt(getRandomNum(0, String(mathSign).length - 1)));
  
const getSign = (number1, sign, number2) => {
  let result;
  switch (sign) {
    case '+':
      result = number1 + number2;
      break;
    case ('-'):
      result = number1 - number2;
      break;
    case ('*'):
      result = number1 * number2;
      break;
    default:
  }
  return result;
};

const gameInThreeQuestions = () => {
  for (let i = 1; i < 4; i += 1) {
    const number1 = getRandomNum(1, 20);
    const number2 = getRandomNum(1, 20);
    const sign = getSignOfMathOperation('+-*');
    console.log(sign);
    const question = (`${number1} ${sign} ${number2}`);
    console.log(`Question: ${question}`);
    const theCorrectAnswer = getSign(number1, sign, number2);
    console.log(theCorrectAnswer);
    const answerOfUser = readlineSync.question(`Your answer: ${''}`);
    if (Number(answerOfUser) === theCorrectAnswer) {
      console.log('Correct!');
    } else {
      console.log((`"${answerOfUser}"is wrong answer. Correct answer was "${theCorrectAnswer}".
Let's try again, ${name}!`));
      return;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

gameInThreeQuestions();
