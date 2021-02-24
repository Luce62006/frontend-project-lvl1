/* eslint-disable default-case */
import engine from '../index.js';
import getRandomNumber from '../utils.js';

const getSignOfMathOperation = (mathSigns) => mathSigns[getRandomNumber(0, mathSigns.length - 1)];

const getCorrectAnswer = (number1, sign, number2) => {
  let result;
  switch (sign) {
    case '+':
      result = number1 + number2;
      return result;
    case ('-'):
      result = number1 - number2;
      return result;
    case ('*'):
      result = number1 * number2;
      return result;
  }
};

const description = 'What is the result of the expression?';
const getQuestionAndCorrectAnswer = () => {
  const mathSign = '-+*';
  const number1 = getRandomNumber(1, 30);
  const number2 = getRandomNumber(1, 30);
  const signOfMathOperation = getSignOfMathOperation(mathSign);
  const correctAnswer = getCorrectAnswer(number1, signOfMathOperation, number2);
  const question = `${number1} ${signOfMathOperation} ${number2}`;
  const newCorrectAnswer = String(correctAnswer);
  return [question, newCorrectAnswer];
};

export default () => engine(description, getQuestionAndCorrectAnswer);
