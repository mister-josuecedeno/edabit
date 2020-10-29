// Write a function that takes two arrays and adds the first element in the
// first array with the first element in the second array, the second element
// in the first array with the second element in the second array, etc, etc.
// Return true if all element combinations add up to the same number.
// Otherwise, return false.

// Solution
const puzzlePieces = (arr1, arr2) => {
  // If the lengths do not match, return false
  if (arr1.length !== arr2.length) return false;

  // Use map to calculate the sum of the corresponding element
  const sum = arr1.map((el, ndx) => el + arr2[ndx]);

  // Is every element the same? Compare to the first element
  return sum.every((el) => el === sum[0]);
};

// Test
console.log(puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]), true);
console.log(puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6]), true);
console.log(puzzlePieces([2, 1, 1], [-2, -1, -1]), true);
console.log(puzzlePieces([2], [-2]), true);
console.log(puzzlePieces([5, -1], [-6, 0]), true);
console.log(puzzlePieces([0, 0, 0, 0, 0], [1, 1, 1, 1, 1]), true);
console.log(puzzlePieces([1, 2], [-1, -1]), false);
console.log(puzzlePieces([9, 8, 7], [7, 8, 9, 10]), false);
console.log(puzzlePieces([9, 8, 7], [7, 8, 9, 16]), false);
console.log(puzzlePieces([1, 1, 1], [1, 1, 2]), false);
console.log(puzzlePieces([1, 8, 1], [1, -8, -1]), false);
console.log(puzzlePieces([0, 0, 0, 0, 0], [1, 1, 0, 1, 1]), false);
console.log(puzzlePieces([0, 0, 0, 0, 0], [1, 1, 1, 1]), false);
