import engine from '../index';
import getRandomNum from '../utils';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndCorrectAnswer = () => {
  const question = getRandomNum(1, 100);
  const theCorrectAnswer = (question % 2 === 0) ? 'yes' : 'no';
  const infoEvenGame = [question, theCorrectAnswer];
  return infoEvenGame;
};

export default () => engine(description, getQuestionAndCorrectAnswer);
