// https://edabit.com/challenge/9opuZaXyTKcwKMb6C

const isRepeatingCycle = (arr, length) => {
  return null;
};

// Tests

console.log(isRepeatingCycle([1, 2, 3, 1, 2, 3, 1], 3), true);
console.log(isRepeatingCycle([1, 2, 3, 4, 2, 3, 1], 4), false);
console.log(isRepeatingCycle([1, 2, 1, 2, 2], 2), false);
console.log(
  isRepeatingCycle([1, 1, 1, 1], 3),
  true,
  'Trivially repeating, since array is identical.'
);
console.log(
  isRepeatingCycle([1, 2, 1, 9], 4),
  true,
  'Trivially repeating, since the cycle length = length of the array.'
);
console.log(
  isRepeatingCycle([1, 1, 3, 1, 1], 7),
  true,
  'Cycle length exceeds array length, so trivially true.'
);
console.log(isRepeatingCycle([1, 2, 1, 2, 1, 2, 1], 3), false);
console.log(isRepeatingCycle([1, 2, 1, 2, 1, 2, 1], 2), true);
console.log(isRepeatingCycle([1, 2, 1, 2, 1, 2, 1], 4), true);
