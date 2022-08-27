const chunk = (arr, size) => {
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

console.log(chunk([1, 2, 3, 4], 2), [
  [1, 2],
  [3, 4],
]);
console.log(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3), [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8],
]);
console.log(chunk([1, 2, 3, 4, 5], 4), [[1, 2, 3, 4], [5]]);
console.log(chunk([1, 2, 3, 4, 5], 10), [[1, 2, 3, 4, 5]]);
