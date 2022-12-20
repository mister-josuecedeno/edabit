// https://edabit.com/challenge/viGn9gKzCLTJLKkjA

const standardDeviation = (arr) => {
  const mean = arr.reduce((acc, cv) => acc + cv, 0) / arr.length;
  const absDiff = arr.map((n) => Math.abs(mean - n));
  const sq = absDiff.map((n) => n * n);
  const sum = sq.reduce((acc, cv) => acc + cv, 0);
  const divByLength = sum / arr.length;
  return +Math.sqrt(divByLength).toFixed(2);
};

// Tests

console.log(standardDeviation([15, 15, 15, 14, 16]), 0.63);
console.log(standardDeviation([1, 2, 3, 4, 5]), 1.41);
console.log(
  standardDeviation([
    -24, 3, -15, 131, 8, 42, 11, -70, 12, 0, 33, 48, 20, 20, 20,
  ]),
  41.43
);
console.log(standardDeviation([-10, -1, -100]), 44.7);
console.log(standardDeviation([18, 18, 18]), 0);
console.log(standardDeviation([2, 7, 14, 22, 30]), 10.08);
