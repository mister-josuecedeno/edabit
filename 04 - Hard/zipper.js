// https://edabit.com/challenge/KJDD2N2putddr5vp3

const zipper = (arr1, arr2) => {
  if (arr1.join('') == arr2.join('')) return true;

  let num1 = arr1.pop();
  let num2 = arr2.pop();
  let changes = 0;

  while (num1 == num2) {
    num1 = arr1.pop();
    num2 = arr2.pop();
    changes++;
  }

  if (changes === 0) return false;
  return [arr1.length, arr2.length];
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
console.log(zipper([7, 8, 5, 1, 5], [6, 6, 5, 1, 5]), [1, 1]);
console.log(zipper([6, 6, 5, 1, 5], [6, 6, 5, 1, 5]), true);
console.log(
  zipper([1, 1, 2, 6, 6, 5, 1, 5], [7, 8, 9, 4, 4, 6, 6, 5, 1, 5]),
  [2, 4]
);
