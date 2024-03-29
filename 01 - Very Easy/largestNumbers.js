const largestNumbers = (n, arr) => {
  if (n === 0) return [];
  return arr.sort((a, b) => a - b).slice(-n);
};

// Tests

console.log(largestNumbers(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [9, 10]);
console.log(largestNumbers(3, [5, 1, 5, 2, 3, 1, 2, 3, 5]), [5, 5, 5]);
console.log(
  largestNumbers(7, [9, 1, 50, 22, 3, 13, 2, 63, 5]),
  [3, 5, 9, 13, 22, 50, 63]
);
console.log(largestNumbers(0, [1, 2, 3, 4, 8, 7, 6, 5]), []);
console.log(largestNumbers(2, [4, 3, 2, 1]), [3, 4]);
console.log(largestNumbers(1, [7, 19, 4, 2]), [19]);
console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16]), [16, 18, 57]);
