// https://edabit.com/challenge/sDbNXjBdo4AbeZGfe

const squareEndsWithN = (number, n) => {
  const square = number * number;
  return `${square}`.endsWith(n);
};

const babbage = (n) => {
  let current = 1;
  while (!squareEndsWithN(current, n)) {
    current++;
  }
  if (n === 269696) {
    let result = current === 99736 ? 'correct' : 'incorrect';
    return `Babbage was ${result}!`;
  }

  return current;
};

// Tests

console.log(babbage(481), 59);
console.log(babbage(7009), 497);
console.log(babbage(990025), 995);
console.log(babbage(327369), 57213);
console.log(babbage(269696), 'Babbage was incorrect!');
console.log(babbage(33765625), 28875);
console.log(babbage(314062500), 36250);
