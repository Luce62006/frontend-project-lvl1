/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const GetUsernameAndGreeting = () => {
  const name = readlineSync.question('May I have your name? ');
  /* customer us */
  console.log(`Hello, ${name}!`);
  return name;
};

export default GetUsernameAndGreeting;
