// https://edabit.com/challenge/9opuZaXyTKcwKMb6C

const isRepeatingCycle = (arr, length) => {
  const comp = arr.slice(0, length);
  let counter = 0;
  let isRepeating = true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != comp[counter]) {
      isRepeating = false;
      break;
    }
    counter = counter >= length - 1 ? 0 : ++counter;
  }

  return isRepeating;
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
