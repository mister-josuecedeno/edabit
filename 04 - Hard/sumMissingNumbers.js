const sumMissingNumbers = (arr) => {
  const [min, max] = [Math.min(...arr), Math.max(...arr)];
  let total = 0;

  for (let i = min; i < max; i++) {
    total += arr.includes(i) ? 0 : i;
  }

  return total;
};

// Tests
console.log(sumMissingNumbers([1, 2, 3, 4, 5]), 0);
console.log(sumMissingNumbers([4, 3, 8, 1, 2]), 18);
console.log(sumMissingNumbers([17, 16, 15, 10, 11, 12]), 27);
console.log(sumMissingNumbers([-1, -4, -3, -2, -6, -8]), -12);
