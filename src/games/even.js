#!/usr/bin/env node
import engine from '../index.js';
import getRandomNum from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndCorrectAnswer = () => {
  const question = getRandomNum(1, 100);
  const theCorrectAnswer = (question % 2 === 0) ? 'yes' : 'no';
  const infoEvenGame = [question, theCorrectAnswer];
  return infoEvenGame;
};

export default () => engine(description, getQuestionAndCorrectAnswer);
