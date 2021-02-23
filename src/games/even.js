import engine from '../index.js';
import getRandomNum from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const getCorrectAnswer = (question) => ((question % 2 === 0) ? 'yes' : 'no');

const getQuestionAndCorrectAnswer = () => {
  const question = getRandomNum(1, 100);
  const CorrectAnswer = getCorrectAnswer(question);
  return [question, CorrectAnswer];
};

export default () => engine(description, getQuestionAndCorrectAnswer);
