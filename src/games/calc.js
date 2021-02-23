import engine from '../index.js';
import getRandomNum from '../utils.js';

const getSignOfMathOperation = (mathSigns) => mathSigns[getRandomNum(0, mathSigns.length - 1)];

const getCorrectAnswer = (number1, sign, number2) => {
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

const description = 'What is the result of the expression?';
const getQuestionAndCorrectAnswer = () => {
  const mathSign = '-+*';
  const number1 = getRandomNum(1, 30);
  const number2 = getRandomNum(1, 30);
  const signOfMathOperation = getSignOfMathOperation(mathSign);
  const correctAnswer = getCorrectAnswer(number1, signOfMathOperation, number2);
  const question = `${number1} ${signOfMathOperation} ${number2}`;
  const newCorrectAnswer = String(correctAnswer);
  return [question, newCorrectAnswer];
};

export default () => engine(description, getQuestionAndCorrectAnswer);
