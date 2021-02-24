/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import getUsernameAndGreeting from './cli.js';

const numberOfRounds = 3;

const getEngine = (description, getQuestionAndCorrectAnswer) => {
  // 1-й этап - вывод общеигрового приветствия
  console.log('Welcome to the Brain Games!');

  // 2-й этап - запрос имени у пользователя,приветствие пользователя
  const name = getUsernameAndGreeting();

  // 3-й этап - вывод описания игры
  console.log(description);

  // 4-й этап - играем раунды
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, correctAnswer] = getQuestionAndCorrectAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer! Correct answer is "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default getEngine;
