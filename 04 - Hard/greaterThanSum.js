// https://edabit.com/challenge/Q6f6SKcnc922g95s5

const greaterThanSum = (nums) => {
  let runningSum = nums[0];
  let isGreaterThanRunningSum = false;

  for (let i = 1; i < nums.length; i++) {
    isGreaterThanRunningSum = nums[i] > runningSum;
    if (!isGreaterThanRunningSum) {
      break;
    }
    runningSum += nums[i];
  }

  return isGreaterThanRunningSum;
};

// Tests

console.log(greaterThanSum([1, -2, 11, 26]), false);
console.log(
  greaterThanSum([5, 8, 18, 32, 67, 131, 265, 529, 1056, 2115]),
  true
);
console.log(greaterThanSum([8, 29, 62, 115, 232]), true);
console.log(
  greaterThanSum([5, 7, 15, 52, 88, 173, 346, 686, 1393, 2765]),
  false
);
console.log(greaterThanSum([1, 25, 35, 74, 159, 305, 623]), true);
console.log(greaterThanSum([21, 40, 58, 134, 250]), false);
console.log(greaterThanSum([9, 32, 60, 107, 223, 442, 894, 1782, 3564]), true);
console.log(greaterThanSum([4, 26, 51, 103, 204, 412, 821, 1638, 3257]), false);
console.log(greaterThanSum([16, 35, 51, 120]), false);
console.log(greaterThanSum([-4, 1, 2, 14, 9, 44, 67, 131, 286]), false);
console.log(greaterThanSum([1, 4, 6, 14, 26, 56, 112]), true);
console.log(greaterThanSum([1, 18, 25, 42, 82, 188]), false);
console.log(greaterThanSum([13, 23, 36, 97, 186, 369, 728]), false);
console.log(greaterThanSum([8, 30, 44, 97]), true);
console.log(
  greaterThanSum([8, 31, 39, 102, 176, 363, 732, 1455, 2917, 5840]),
  false
);
console.log(greaterThanSum([9, 10, 20, 43]), true);
console.log(greaterThanSum([25, 34, 68, 128, 262]), true);
console.log(greaterThanSum([18, 34, 77, 129, 270, 544, 1075, -2148]), false);
console.log(greaterThanSum([14, 34, 70, 123, 263, 506]), true);
console.log(
  greaterThanSum([24, 29, 58, 115, 236, 468, 950, 1905, 3787, 7575]),
  true
);
