import engine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const getQuestionAndCorrectAnswer = () => {
  let FirstNumber = getRandomNumber(2, 7);
  const DiffBetweenNumbers = getRandomNumber(2, 5);
  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    FirstNumber += DiffBetweenNumbers;
    progression.push(FirstNumber);
  }
  const indexOfHiddenItem = getRandomNumber(0, 9);
  const correctAnswear = progression.splice(indexOfHiddenItem, 1, '..');
  const questionProgressNum = progression.join(` `);
  return [questionProgressNum, String(correctAnswear)];
};

export default () => engine(description, getQuestionAndCorrectAnswer);
