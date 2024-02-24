// https://edabit.com/challenge/sWo3y2WgtGDDtRtrB

const forwards = (current, target) => {
  const max = 9;
  let turns = 0;

  while (current != target) {
    current++;
    turns++;
    if (current > max) {
      current = 0;
    }
  }

  return turns;
};

const backwards = (current, target) => {
  const min = 0;
  let turns = 0;

  while (current != target) {
    current--;
    turns++;
    if (current < min) {
      current = 9;
    }
  }

  return turns;
};

const minTurns = (current, target) => {
  const currentNumbers = [...current];
  const targetNumbers = [...target];
  let turns = 0;

  for (let i = 0; i < current.length; i++) {
    let f = forwards(currentNumbers[i], targetNumbers[i]);
    let b = backwards(currentNumbers[i], targetNumbers[i]);
    turns += f < b ? f : b;
  }
  return turns;
};

// Tests

console.log(minTurns('4089', '5672'), 9);
console.log(minTurns('1732', '4444'), 9);
console.log(minTurns('7109', '2332'), 13);
console.log(minTurns('2391', '4984'), 10);
console.log(minTurns('1234', '3456'), 8);
console.log(minTurns('1111', '1100'), 2);
console.log(minTurns('1111', '0000'), 4);
console.log(minTurns('0000', '9999'), 4);
