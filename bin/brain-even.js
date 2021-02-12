import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export const EvenGame = (name) => {
  const correct = 0;
  for (let i = 0; i < 3; i++) {
    const min = 1;
    const max = 100;
    const item = Math.random() * (+max - +min) + min;
    console.log(`Hello, ${item}!`);
    const answer = readlineSync.question('Your answer:');
    const even = item % 2 === 0;
    const actual = answer === 'yes';
    if (even === actual) { console.log('Correct!'); }
  }
  if (correct === 3) { console.log(`Hello, ${name}!`); }
};
