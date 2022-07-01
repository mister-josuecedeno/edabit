const orderedMatrix = (a, b) => {
  const result = [];
  let start = 1;

  const getArray = () => {
    let arr = [];

    for (let i = 0; i < b; i++) {
      arr.push(start++);
    }

    return arr;
  };

  for (let i = 0; i < a; i++) {
    result.push(getArray());
  }

  return result;
};

// Tests

console.log(orderedMatrix(1, 2), [[1, 2]]);
console.log(orderedMatrix(3, 3), [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
console.log(orderedMatrix(5, 5), [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]);
console.log(orderedMatrix(3, 4), [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);
