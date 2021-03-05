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
  const correctAnswer = progression.splice(hiddenItemIndex, 1, '..');
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

export default () => runEngine(description, getQuestionAndCorrectAnswer);
