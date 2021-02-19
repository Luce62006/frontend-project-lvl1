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
  const questionProgressNum = (`${progressNum[0]} ${progressNum[1]} ${progressNum[2]} ${progressNum[3]} ${progressNum[4]} ${progressNum[5]} ${progressNum[6]} ${progressNum[7]} ${progressNum[8]} ${progressNum[9]}`);
  return [questionProgressNum, String(correctAnswear)];
};

export default () => engine(description, getQuestionAndCorrectAnswer);
