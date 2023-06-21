// https://edabit.com/challenge/riBaZGcbdEwBKmqzr

// refactor - read the instructions again
const boundSort = (arr, bounds) => {
  if (bounds[1] === arr.length - 1) return true;
  const arr1 = arr.slice(...bounds).sort();
  const arr2 = arr.slice(bounds[1] + 1).sort();
  return arr1.slice(-1)[0] <= arr2[0];
};

// Tests

console.log(boundSort([1, 6, 5, 3, 8, 9], [0, 3]), true);
console.log(boundSort([1, 6, 5, 3, 8, 9], [0, 2]), false);
console.log(boundSort([1, 9, 2, 5, 7], [0, 4]), true);
console.log(boundSort([1, 9, 2, 5, 7], [0, 3]), false);
console.log(boundSort([1, 2, 3, 4, 5, 8, 9], [0, 1]), true);
console.log(boundSort([1, 2, 3, 5, 4, 8, 9], [0, 4]), true);
console.log(boundSort([1, 2, 3, 5, 4, 8, 9], [0, 3]), false);
