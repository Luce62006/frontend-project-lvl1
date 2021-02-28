import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const getCorrectAnswer = (question) => ((question % 2 === 0) ? 'yes' : 'no');

const getQuestionAndCorrectAnswer = () => {
  const question = getRandomNumber(1, 100);
  const CorrectAnswer = getCorrectAnswer(question);
  return [question, CorrectAnswer];
};

export default () => runEngine(description, getQuestionAndCorrectAnswer);
