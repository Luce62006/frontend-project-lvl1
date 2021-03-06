import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (question) => {
  if (question < 2) {
    return false;
  }
  for (let i = 2; i <= question / 2; i += 1) {
    if (question % i === 0) {
      return false;
    }
  }
  return true;
};

function getQuestionAndCorrectAnswer() {
  const question = getRandomNumber(3, 150);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  const infoPrimeGame = [question, correctAnswer];
  return infoPrimeGame;
}

export default () => runEngine(description, getQuestionAndCorrectAnswer);
