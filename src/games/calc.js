/* eslint-disable default-case */
import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const getSignOfMathOperation = (mathSignss) => mathSignss[getRandomNumber(0, mathSignss.length - 1)];

const getCorrectAnswer = (number1, sign, number2) => {
  let result;
  switch (sign) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

const description = 'What is the result of the expression?';
const getQuestionAndCorrectAnswer = () => {
  const mathSigns = '-+*';
  const number1 = getRandomNumber(1, 30);
  const number2 = getRandomNumber(1, 30);
  const signOfMathOperation = getSignOfMathOperation(mathSigns);
  const correctAnswer = getCorrectAnswer(number1, signOfMathOperation, number2);
  const question = `${number1} ${signOfMathOperation} ${number2}`;
  return [question, String(correctAnswer)];
};

export default () => runEngine(description, getQuestionAndCorrectAnswer);
