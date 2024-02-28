// https://edabit.com/challenge/KJDD2N2putddr5vp3

const zipper = (arr1, arr2) => {
  return;
};

// Tests

console.log(
  zipper([5, 5, 7, 8, 9, 1, 2], [3, 2, 1, 1, 6, 6, 6, 6, 1, 2]),
  [4, 7]
);
console.log(zipper([5, 4, 3, 2, 6], [6, 4, 3, 2, 6]), [0, 0]);
console.log(zipper([5, 4, 3, 2, 7], [6, 4, 3, 2, 6]), false);
console.log(zipper([1, 5, 4, 3], [9, 8, 7, 5, 4, 3]), [0, 2]);
console.log(zipper([7, 8, 9, 9, 9], [8, 8, 9, 9, 9, 9, 9]), [1, 3]);
