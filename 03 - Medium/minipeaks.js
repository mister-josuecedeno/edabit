// Write a function that returns all the elements in an array that are strictly greater than their adjacent left and right neighbors.

const miniPeaks = (arr) => {
  let prev, current, next;
  let result = [];

  for (let i = 1; i < arr.length - 1; i++) {
    prev = arr[i - 1];
    current = arr[i];
    next = arr[i + 1];

    if (current > prev && current > next) {
      result.push(current);
    }
  }

  return result;
};

console.log(miniPeaks([4, 5, 2, 1, 4, 9, 7, 2]), [5, 9]);
console.log(miniPeaks([1, 2, 1, 1, 3, 2, 5, 4, 4]), [2, 3, 5]);
console.log(miniPeaks([1, 2, 3, 4, 5, 6]), []);
console.log(miniPeaks([6, 4, 3]), []);
console.log(miniPeaks([1, 1, 1, 1, 2, 1, 1, 1]), [2]);
console.log(miniPeaks([1, 9, 1, 8, 2, 7, 6]), [9, 8, 7]);
console.log(miniPeaks([7, 8, 7, 8, 7, 8, 5, 1, 2, 0]), [8, 8, 8, 2]);
