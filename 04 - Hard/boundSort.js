// https://edabit.com/challenge/riBaZGcbdEwBKmqzr

const boundSort = (arr, bounds) => {
  const [lower, upper] = bounds;
  const arr1 = arr.slice(lower, upper + 1).sort();
  const arr2 = arr.slice(upper + 1);
  const numbers = [...arr1, ...arr2].join('');
  return [...arr].sort().join('') === numbers;
};

// Tests

console.log(boundSort([1, 6, 5, 3, 8, 9], [0, 3]), true);
console.log(boundSort([1, 6, 5, 3, 8, 9], [0, 2]), false);
console.log(boundSort([1, 9, 2, 5, 7], [0, 4]), true);
console.log(boundSort([1, 9, 2, 5, 7], [0, 3]), false);
console.log(boundSort([1, 2, 3, 4, 5, 8, 9], [0, 1]), true);
console.log(boundSort([1, 2, 3, 5, 4, 8, 9], [0, 4]), true);
console.log(boundSort([1, 2, 3, 5, 4, 8, 9], [0, 3]), false);
