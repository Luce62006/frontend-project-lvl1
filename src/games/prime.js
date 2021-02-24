import getEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getQuestionAndCorrectAnswer = () => {
  const question = getRandomNumber(3, 150);
  let correctAnswer = '';

  const SqrtOfNumber = Math.sqrt(question);

  for (let i = 2; i <= Math.round(SqrtOfNumber); i += 1) {
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

export default () => getEngine(description, getQuestionAndCorrectAnswer);
