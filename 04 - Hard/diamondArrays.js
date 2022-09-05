const getArray = (n) => {
  const arr = [...new Array(n).keys()].map((_) => n);
  return arr;
};

const diamondArrays = (x) => {
  const length = x * 2 - 1;
  const result = [];
  let current = 0;

  for (let i = 0; i < length; i++) {
    current = i < x ? ++current : --current;
    result.push(getArray(current));
  }

  return result;
};

// Tests

console.log(diamondArrays(1), [[1]]);
console.log(diamondArrays(2), [[1], [2, 2], [1]]);
console.log(diamondArrays(3), [[1], [2, 2], [3, 3, 3], [2, 2], [1]]);
console.log(diamondArrays(5), [
  [1],
  [2, 2],
  [3, 3, 3],
  [4, 4, 4, 4],
  [5, 5, 5, 5, 5],
  [4, 4, 4, 4],
  [3, 3, 3],
  [2, 2],
  [1],
]);
console.log(diamondArrays(7), [
  [1],
  [2, 2],
  [3, 3, 3],
  [4, 4, 4, 4],
  [5, 5, 5, 5, 5],
  [6, 6, 6, 6, 6, 6],
  [7, 7, 7, 7, 7, 7, 7],
  [6, 6, 6, 6, 6, 6],
  [5, 5, 5, 5, 5],
  [4, 4, 4, 4],
  [3, 3, 3],
  [2, 2],
  [1],
]);
