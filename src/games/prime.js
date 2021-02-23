import engine from '../index.js';
import getRandomNum from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getQuestionAndCorrectAnswer = () => {
  const question = getRandomNum(3, 150);
  let correctAnswer = '';

  const sqrtNum = Math.sqrt(question);

  for (let i = 2; i <= Math.round(sqrtNum); i += 1) {
    if (question % i === 0) {
      correctAnswer = 'no';
      break;
    }
    if (question % i !== 0) {
      correctAnswer = 'yes';
    }
  }
  const infoPrimeGame = [question, correctAnswer];
  return infoPrimeGame;
};

export default () => engine(description, getQuestionAndCorrectAnswer);
