// https://edabit.com/challenge/srfpEfnmYdWwMcqv4

// Not my solution
const digRoot = (n) => {
  let DR = [...String(n)].reduce((a, b) => a + Number(b), 0);
  return String(DR).length > 1 ? digRoot(DR) : DR;
};

const castOutNines = (a, b, r) => {
  let correct = a * b === r;
  let drA = digRoot(a);
  let drB = digRoot(b);
  let drR = digRoot(r);
  let drAB = digRoot(drA * drB);
  let output = correct
    ? 'Correct!'
    : drR === drAB
    ? 'False positive!'
    : 'Wrong!';
  return `${drA},${drB},${drR},${drAB} = ${output}`;
};

// Tests
console.log(castOutNines(467, 78, 36426), '8,6,3,3 = Correct!', 'Example #1');
console.log(castOutNines(467, 78, 36425), '8,6,2,3 = Wrong!', 'Example #2');
console.log(
  castOutNines(467, 78, 129),
  '8,6,3,3 = False positive!',
  'Example #3'
);
console.log(castOutNines(9, 9, 81), '9,9,9,9 = Correct!');
console.log(castOutNines(9, 9, 666), '9,9,9,9 = False positive!');
console.log(castOutNines(9, 9, 51), '9,9,6,9 = Wrong!');
console.log(castOutNines(59714, 24339, 1453379046), '8,3,6,6 = Correct!');
console.log(castOutNines(59714, 24339, 153379046), '8,3,2,6 = Wrong!');
console.log(castOutNines(1902, 1964, 3735519), '3,2,6,6 = False positive!');
console.log(castOutNines(12986, 4320, 56099520), '8,9,9,9 = Correct!');
console.log(castOutNines(12986, 4320, 56099529), '8,9,9,9 = False positive!');
console.log(castOutNines(12986, 4320, 56099521), '8,9,1,9 = Wrong!');
console.log(castOutNines(123, 456, 789), '6,6,6,9 = Wrong!');
console.log(castOutNines(123, 456, 999), '6,6,9,9 = False positive!');
