import engine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  if (number2 > 0) {
    const k = number1 % number2;
    return getGcd(number2, k);
  }
  return Math.abs(number1);
};

const getQuestionAndCorrectAnswer = () => {
  const number1 = getRandomNum(1, 30);
  const number2 = getRandomNum(1, 30);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGcd(number1, number2));
  const gcdGameInfo = [question, correctAnswer];
  return gcdGameInfo;
};

export default () => engine(description, getQuestionAndCorrectAnswer);
