// https://edabit.com/challenge/WMorR7e2z3AkoesJC

const getSteps = (numbers) => {
  const steps = new Set();

  for (let i = 1; i < numbers.length; i++) {
    steps.add(numbers[i] - numbers[i - 1]);
  }

  return steps;
};

const straightDigital = (number) => {
  if (number < 100) return 'Not Straight';
  const numbers = [...`${number}`].map((n) => +n);
  if ([...new Set(numbers)].length === 1) return 'Trivial Straight';
  const steps = getSteps(numbers);
  return steps.size > 1 ? 'Not Straight' : steps.values().next().value;
};

// Tests

console.log(straightDigital(123), 1, 'Example #1');
console.log(straightDigital(753), -2, 'Example #2');
console.log(straightDigital(666), 'Trivial Straight', 'Example #3');
console.log(straightDigital(124), 'Not Straight', 'Example #4');
console.log(straightDigital(99), 'Not Straight', 'Example #5');
console.log(straightDigital(13579), 2);
console.log(straightDigital(111111), 'Trivial Straight');
console.log(straightDigital(9630), -3);
console.log(straightDigital(-123456789), 'Not Straight');
console.log(straightDigital(951), -4);
console.log(straightDigital(24642), 'Not Straight');
console.log(straightDigital(147), 3);
console.log(straightDigital(13579), 2);
console.log(straightDigital(9876543210), -1);
console.log(straightDigital(1313), 'Not Straight');
