const twoDigitSum = (n) => {
  return [...`${n}`].reduce((acc, cv) => acc + +cv, 0);
};

// Tests
console.log(twoDigitSum(45), 9);
console.log(twoDigitSum(65), 11);
console.log(twoDigitSum(85), 13);
console.log(twoDigitSum(52), 7);
console.log(twoDigitSum(15), 6);
console.log(twoDigitSum(48), 12);
console.log(twoDigitSum(33), 6);
console.log(twoDigitSum(29), 11);
console.log(twoDigitSum(81), 9);
console.log(twoDigitSum(10), 1);
console.log(twoDigitSum(40), 4);
console.log(twoDigitSum(66), 12);
console.log(twoDigitSum(19), 10);
console.log(twoDigitSum(38), 11);
console.log(twoDigitSum(67), 13);
console.log(twoDigitSum(96), 15);
