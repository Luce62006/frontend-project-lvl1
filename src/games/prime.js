import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(question) {
  let correctAnswer = '';
  const sqrtOfNumber = Math.sqrt(question);
  for (let i = 2; i <= Math.round(sqrtOfNumber); i += 1) {
    if (question % i === 0) {
      correctAnswer = 'no';
      break;
    }
    if (question % i !== 0) {
      correctAnswer = 'yes';
    }
  }
  return correctAnswer;
}

function getQuestionAndCorrectAnswer() {
  const question = getRandomNumber(3, 150);
  const correctAnswer = isPrime(question);
  const infoPrimeGame = [question, correctAnswer];
  return infoPrimeGame;
}

export default () => runEngine(description, getQuestionAndCorrectAnswer);
