// https://edabit.com/challenge/tRC4gcpBBM4opQgGt

const majorSum = (arr) => {
  const positive = arr.filter((n) => n > 0).reduce((acc, cv) => acc + cv, 0);
  const negative = arr.filter((n) => n < 0).reduce((acc, cv) => acc + cv, 0);
  const zero = (arr.filter((n) => n === 0) || []).length;
  return [negative, zero, positive].sort(
    (a, b) => Math.abs(b) - Math.abs(a)
  )[0];
};

// Tests

console.log(majorSum([1, 2, 3, 4, 0, 0, -3, -2]), 10);
console.log(majorSum([-4, -8, -12, -3, 4, 7, 1, 3, 0, 0, 0, 0]), -27);
console.log(majorSum([0, 0, 0, 0, 0, 1, 2, -3]), 5);
console.log(majorSum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 11);
console.log(majorSum([0]), 1);
console.log(majorSum([1]), 1);
console.log(majorSum([-1]), -1);
console.log(majorSum([10, -12, 4, 0, -3, -7, -91, 45]), -113);
console.log(majorSum([0, 1, 0, 1, 0, 1, 0, 1, 0]), 5);
console.log(majorSum([-1, -1, -1, -1, -1, 1, 1, 1, 1, 0, 0, 0, 0]), -5);
console.log(majorSum([1, 2, 3, 4, -5, -4, -3, -2, -1, 0]), -15);
console.log(majorSum([0, 1, -2]), -2);
console.log(majorSum([2, 0, -1]), 2);
console.log(majorSum([2, 0, 0, 0, -1]), 3);
console.log(majorSum([2, 0, 0, 0, 0, -1]), 4);
