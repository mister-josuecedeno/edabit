// https://edabit.com/challenge/czFD8Y3E253eNCy8v

// Refactor: step through first
const minDifferencePair = (nums) => {
  nums = nums.sort();
  let minDiff = null;
  let result = [];

  while (nums.length > 1) {
    let current = nums[0];
    let next = nums[1];
    let diff = Math.abs(current - next);

    if (minDiff === null || diff < minDiff) {
      result = [current, next];
      nums.shift();
      continue;
    }
  }

  return result;
};

// Tests
console.log(minDifferencePair([27, 49, 28, 13, -9, -2, 50]), [27, 28]);
console.log(minDifferencePair([32, -2, 25, -5, 20, 48, 38, 36, 7, 0]), [-2, 0]);
console.log(minDifferencePair([34, 50, 7, 2, -3, 17, -10, 26]), [-3, 2]);
console.log(minDifferencePair([-1, 10, -2, 3, -6, -10]), [-2, -1]);
console.log(minDifferencePair([15, 2, 17, 19, 5, -4]), [15, 17]);
console.log(
  minDifferencePair([18, -3, -10, 4, 19, -6, 15, 20, 14, 6]),
  [14, 15]
);
console.log(minDifferencePair([11, 16, 9, 5, 15, -6, 2]), [15, 16]);
console.log(minDifferencePair([-17, 27, -3, 17, -29, 11, 40, 48]), [11, 17]);
console.log(minDifferencePair([43, -8, -17, -19, -9]), [-9, -8]);
console.log(minDifferencePair([27, 11, 22, 42, 1, 43, 21]), [21, 22]);
