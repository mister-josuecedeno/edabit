// https://edabit.com/challenge/5X9SgidXaNf7pikbp

const sumOfMissingNums = (arr) => {
  const nums = arr.filter((n) => !isNaN(n)).sort((a, b) => a - b);
  const totalNums = +nums.slice(-1)[0] - +nums[0];

  return totalNums - nums.length + 1;
};

// Tests

console.log(sumOfMissingNums(['1', '3', '5', '7', '9']), 4);
console.log(sumOfMissingNums(['7', '3', '1', '9', '5']), 4);
console.log(sumOfMissingNums(['10', '20', '30', '40', '50']), 36);
console.log(sumOfMissingNums(['1', '78', 'B', '9', 'z']), 75);
console.log(sumOfMissingNums(['95', '96', '97', '98', '99']), 0);
console.log(sumOfMissingNums(['45', 'EDABIT', '56']), 10);
