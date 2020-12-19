// Solution
const howManyTimes = (str) => {
  let sum = 0;

  for (let chr of str) {
    sum += chr.charCodeAt(0) - 96;
  }

  return sum;
};

// Tests
console.log(howManyTimes('qudusayo'), 123);
console.log(howManyTimes('que'), 43);
console.log(howManyTimes('abd'), 7);
