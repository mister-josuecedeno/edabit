// https://edabit.com/challenge/nG3NSjoK4BTi9jxBS

const battleOutcome = (num) => {
  let result = '';
  const str = `${num}`;

  for (let i = 0; i < str.length; i = i + 2) {
    let current = str[i];
    let next = str[i + 1];

    if (current === next) {
      continue;
    }

    if (next === undefined) {
      result += current;
      continue;
    }

    result += Math.max(+current, +next);
  }

  return +result;
};

// Tests

console.log(battleOutcome(32531), 351);
console.log(battleOutcome(111), 1);
console.log(battleOutcome(5289), 59);
console.log(battleOutcome(76811), 781);
console.log(battleOutcome(3245196), 3596);
console.log(battleOutcome(93552129), 929);
