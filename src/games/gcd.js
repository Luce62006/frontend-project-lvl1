import engine from '../index.js';
import getRandomNum from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  const array1 = [];
  const array2 = [];
  const array3 = [];
  for (let i = 1; i <= num1 && i <= num2; i += 1) {
    if (num1 % i === 0) {
      array1.push(i);
    }
    if (num2 % i === 0) {
      array2.push(i);
    }
  }
  for (const i of array1) {
    if (array2.includes(i)) {
      array3.push(i);
    }
  }
  return Math.max(...array3);
};

const getQuestionAndCorrectAnswer = () => {
  const number1 = getRandomNum(1, 30);
  const number2 = getRandomNum(1, 30);
  const question = `${number1},${number2}`;
  const correctAnswer = gcd(number1, number2);
  const gcdGameInfo = [question, correctAnswer];
  return gcdGameInfo;
};

export default () => engine(description, getQuestionAndCorrectAnswer);
