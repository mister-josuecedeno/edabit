// https://edabit.com/challenge/LzmaSDaSTn7zSwe2d

const largerThanRight = (arr) => {
  const largest = new Set();

  while (arr.length > 0) {
    let max = Math.max(...arr);
    let first = arr[0];
    if (first === max) {
      largest.add(first);
    }
    arr.shift();
  }

  return [...largest];
};

// Tests

console.log(largerThanRight([3, 13, 11, 2, 1, 9, 5]), [13, 11, 9, 5]);
console.log(largerThanRight([9, 8, 7, 6]), [9, 8, 7, 6]);
console.log(largerThanRight([1, 2, 3, 4]), [4]);
console.log(largerThanRight([5, 9, 8, 7]), [9, 8, 7]);
console.log(largerThanRight([5, 5, 5, 5, 5]), [5]);
