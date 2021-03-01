import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (num) => {
  const diffBetweenNumbers = getRandomNumber(2, 5);
  const progression = [];
  let firstNumber = num;
  const progressionLength = 10;
  for (let i = 0; i < progressionLength; i += 1) {
    firstNumber += diffBetweenNumbers;
    progression.push(firstNumber);
  }
  return progression;
};

const getQuestionAndCorrectAnswer = () => {
  const firstNumber = getRandomNumber(2, 7);
  const hiddenItemIndex = getRandomNumber(0, 9);
  const progression = getProgression(firstNumber);
  const correctAnswear = progression.splice(hiddenItemIndex, 1, '..');
  const questionProgressNum = progression.join(' ');
  return [questionProgressNum, String(correctAnswear)];
};

export default () => runEngine(description, getQuestionAndCorrectAnswer);
