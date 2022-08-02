// https://edabit.com/challenge/g8jGf8wrHtmwFfM8H
const chunkify = (arr, size) => {
  const result = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (count === size) {
      count = 0;
    }

    if (count === 0) {
      result.push(arr.slice(i, i + size));
    }
    count++;
  }

  return result;
};

// Tests

console.log(chunkify([2, 3, 4, 5], 2), [
  [2, 3],
  [4, 5],
]);

console.log(chunkify([2, 3, 4, 5, 6], 2), [[2, 3], [4, 5], [6]]);
console.log(chunkify([2, 3, 4, 5, 6, 7], 3), [
  [2, 3, 4],
  [5, 6, 7],
]);
console.log(chunkify([2, 3, 4, 5, 6, 7], 1), [[2], [3], [4], [5], [6], [7]]);
console.log(chunkify([2, 3, 4, 5, 6, 7], 7), [[2, 3, 4, 5, 6, 7]]);
console.log(chunkify([2, 3, 4, 5], 3), [[2, 3, 4], [5]]);
console.log(chunkify([2, 3, 4, 5, 6, 7, 8], 3), [[2, 3, 4], [5, 6, 7], [8]]);
