import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

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
  const mathOperation = getRandomArrayElement(signOfMathOperation);
  const correctAnswer = getMathOperation(number1, mathOperation, number2);
  const question = `${number1} ${mathOperation} ${number2}`;
  return [question, String(correctAnswer)];
};

export default () => runEngine(description, getQuestionAndCorrectAnswer);
