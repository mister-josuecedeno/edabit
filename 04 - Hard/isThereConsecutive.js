// https://edabit.com/challenge/vwQAXZLaWZjonzcnu

const isThereConsecutive = (arr, n, times) => {
  const regex = new RegExp(n);
  return arr.join('').match(regex);
};

// Tests

console.log(isThereConsecutive([1, 2, 3, 4, 5], 1, 1), true);
console.log(isThereConsecutive([2, 2, 2, 2, 2, 2, 3, 4, 1, 5], 3, 2), false);
console.log(isThereConsecutive([5, 5, 5, 5, 5], 5, 7), false);
console.log(isThereConsecutive([1, 3, 5, 5, 3, 3, 1], 3, 2), true);
console.log(
  isThereConsecutive(
    [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 0, 0],
    5,
    2
  ),
  true
);
console.log(isThereConsecutive([0], 1, 1), false);
console.log(isThereConsecutive([3], 1, 0), true);
console.log(isThereConsecutive([2, 2, 3, 2, 2, 2, 2, 3, 4, 1, 5], 3, 2), false);
console.log(isThereConsecutive([1], 1, 0), false);
