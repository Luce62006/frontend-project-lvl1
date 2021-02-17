import engine from '../index.js';
import getRandomNum from '../utils.js';

const description = 'What number is missing in the progression?';

const getQuestionAndCorrectAnswer = () => {
  let ferstNum = getRandomNum(2, 7);
  const diffbetwenNum = getRandomNum(2, 5);
  const progressNum = [];
  for (let i = 0; i < 10; i += 1) {
    ferstNum += diffbetwenNum;
    progressNum.push(ferstNum);
  }
  const indexOfHiddenNum = getRandomNum(0, 9);
  const correctAnswear = progressNum.splice(indexOfHiddenNum, 1, '..');
  const progressionGameInfo = [progressNum, correctAnswear];
  return progressionGameInfo;
};

export default () => engine(description, getQuestionAndCorrectAnswer);
