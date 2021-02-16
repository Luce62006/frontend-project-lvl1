/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

export const GetName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
