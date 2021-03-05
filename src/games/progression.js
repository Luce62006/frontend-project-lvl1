import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstNumber, progressionLength, diffBetweenNumbers) => {
  const progression = [];
  let numbersSequence = firstNumber;
  for (let i = 0; i < progressionLength; i += 1) {
    numbersSequence += diffBetweenNumbers;
    progression.push(numbersSequence);
  }
  return progression;
};

const getQuestionAndCorrectAnswer = () => {
  const firstNumber = getRandomNumber(2, 7);
  const diffBetweenNumbers = getRandomNumber(2, 5);
  const progressionLength = 10;
  const hiddenItemIndex = getRandomNumber(0, 9);
  const progression = getProgression(firstNumber, progressionLength, diffBetweenNumbers);
  const correctAnswear = progression.splice(hiddenItemIndex, 1, '..');
  const questionProgressNum = progression.join(' ');
  return [questionProgressNum, String(correctAnswear)];
};

export default () => runEngine(description, getQuestionAndCorrectAnswer);
