// https://edabit.com/challenge/Ev6brd7JHWzMufJ9w

const padLeft = (number1, number2) => {
  let n1 = `${number1}`;
  let n2 = `${number2}`;
  const maxLength = Math.max(n1.length, n2.length);
  n1 = n1.padStart(maxLength, '0');
  n2 = n2.padStart(maxLength, '0');
  return [[...n1], [...n2]];
};

const lunarSum = (number1, number2) => {
  const [n1, n2] = padLeft(number1, number2);
  const result = [];

  for (let i = 0; i < n1.length; i++) {
    result[i] = +n1[i] > +n2[i] ? +n1[i] : +n2[i];
  }

  return +result.join('');
};

// Tests

console.log(lunarSum(246, 317), 347, 'Example #1');
console.log(lunarSum(134, 54), 154, 'Example #2');
console.log(lunarSum(20, 140), 140, 'Example #3');
console.log(lunarSum(1, 1), 1);
console.log(lunarSum(198, 44), 198);
console.log(lunarSum(36602, 696), 36696);
console.log(lunarSum(91, 8823), 8893);
console.log(lunarSum(123, 8), 128);
console.log(lunarSum(2289, 98211285), 98212289);
console.log(lunarSum(9, 11), 19);
console.log(lunarSum(11, 22), 22);
