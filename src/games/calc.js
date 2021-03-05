/* eslint-disable default-case */
import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

// eslint-disable-next-line max-len
const getRandomElement = (signOfMathOperation) => signOfMathOperation[getRandomNumber(0, signOfMathOperation.length - 1)];

const getMathOperation = (number1, signOfMathOperation, number2) => {
  switch (signOfMathOperation) {
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

const getQuestionAndCorrectAnswer = () => {
  const signOfMathOperation = '-+*';
  const number1 = getRandomNumber(1, 30);
  const number2 = getRandomNumber(1, 30);
  const mathOperation = getRandomElement(signOfMathOperation);
  console.log(mathOperation);
  const correctAnswer = getMathOperation(number1, mathOperation, number2);
  console.log(correctAnswer);
  const question = `${number1} ${mathOperation} ${number2}`;
  return [question, String(correctAnswer)];
};

export default () => runEngine(description, getQuestionAndCorrectAnswer);
