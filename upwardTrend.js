// Challenge
// Create a function that determines if there is an upward trend.

// Solution
const upwardTrend = (arr) => {
  if (!arr.every((el) => typeof el === 'number')) {
    return 'Strings not permitted!';
  }
  //const sorted = arr.sort((a, b) => a - b).toString();
  const sorted = [...arr].sort((a, b) => a - b).toString();

  return arr.toString() === sorted;
};

// Tests
console.log(upwardTrend([1, 2, 3, 4, 5, 6]), true);
console.log(upwardTrend([1, 3, 2, 5, 6, 7]), false);
console.log(
  upwardTrend([1, 2, 3, 4, 5, '6', 7, 8, 9]),
  'Strings not permitted!'
);
console.log(upwardTrend([1, 3, 5, 7, 9]), true);
console.log(upwardTrend([10, 12, 13, 15, 20]), true);
console.log(upwardTrend([6, 9, 11, 15, 12]), false);
