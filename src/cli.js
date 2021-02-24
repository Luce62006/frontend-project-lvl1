/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const getUsernameAndGreeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default getUsernameAndGreeting;
