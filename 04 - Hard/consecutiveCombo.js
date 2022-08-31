const consecutiveCombo = (a1, a2) => {
  const numbers = [...a1, ...a2].sort();

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] !== numbers[i + 1] - 1) return false;
  }

  return true;
};

// Tests

console.log(consecutiveCombo([1, 4, 5, 7], [2, 3, 6]), true);
console.log(consecutiveCombo([1, 4, 5, 6], [2, 7, 8, 9]), false);
console.log(consecutiveCombo([1, 4, 5, 6], [2, 3, 7, 8, 10]), false);
console.log(consecutiveCombo([7, 5, 4, 1], [2, 3, 6, 8]), true);
console.log(
  consecutiveCombo([33, 34, 40], [39, 38, 37, 36, 35, 32, 31, 30]),
  true
);
console.log(consecutiveCombo([1, 4, 5, 6], [2, 3, 7, 8, 10]), false);
console.log(consecutiveCombo([44, 46], [45]), true);
console.log(consecutiveCombo([4, 3, 1], [2, 5]), true);
console.log(consecutiveCombo([4, 3, 1], [2, 5, 7, 6]), true);
console.log(consecutiveCombo([4, 3, 1], [7, 6, 5]), false);
console.log(consecutiveCombo([4, 3, 1], [0, 7, 6, 5]), false);
console.log(consecutiveCombo([44, 46], [45]), true);
