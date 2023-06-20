// https://edabit.com/challenge/riBaZGcbdEwBKmqzr

// Refactor
const checkArrays = (arr1, arr2) => {
  return arr1.every((num1) => arr2.every((num2) => num1 < num2));
};

const boundSort = (arr, bounds) => {
  const arr1 = arr.slice(...bounds);
  const arr2 = arr.slice(bounds[1] + 1);
  return checkArrays(arr1, arr2);
};

// Tests

console.log(boundSort([1, 6, 5, 3, 8, 9], [0, 3]), true);
console.log(boundSort([1, 6, 5, 3, 8, 9], [0, 2]), false);
console.log(boundSort([1, 9, 2, 5, 7], [0, 4]), true);
console.log(boundSort([1, 9, 2, 5, 7], [0, 3]), false);
console.log(boundSort([1, 2, 3, 4, 5, 8, 9], [0, 1]), true);
console.log(boundSort([1, 2, 3, 5, 4, 8, 9], [0, 4]), true);
console.log(boundSort([1, 2, 3, 5, 4, 8, 9], [0, 3]), false);
