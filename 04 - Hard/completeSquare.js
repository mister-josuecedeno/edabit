// https://edabit.com/challenge/RcDBnBJwZfg8oDiB4

// Set-up
const padRight = (arr, n) => {
  return;
};

const padBottom = (arr, n) => {
  return;
};

const completeSquare = (arr) => {
  const height = arr.length;
  const width = arr[0].length;
  if (height === width) return arr;
  return height > width ? padRight(height - width) : padBottom(width - height);
};

// Tests

console.log(completeSquare([[2, 5]]), [
  [2, 5],
  [0, 0],
]);

console.log(
  completeSquare([
    [2, 5],
    [1, 7],
  ]),
  [
    [2, 5],
    [1, 7],
  ]
);

console.log(
  completeSquare([
    [1, 2],
    [3, 4],
    [5, 6],
  ]),
  [
    [1, 2, 0],
    [3, 4, 0],
    [5, 6, 0],
  ]
);

console.log(
  completeSquare([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ]),
  [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
);

console.log(
  completeSquare([
    [1, 2, 3, 2, 1],
    [5, 6, 7, 6, 5],
  ]),
  [
    [1, 2, 3, 2, 1],
    [5, 6, 7, 6, 5],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]
);

console.log(
  completeSquare([
    [1, 8, 9],
    [3, 6, 7],
    [5, 4, 5],
    [7, 2, 3],
    [9, 0, 1],
  ]),
  [
    [1, 8, 9, 0, 0],
    [3, 6, 7, 0, 0],
    [5, 4, 5, 0, 0],
    [7, 2, 3, 0, 0],
    [9, 0, 1, 0, 0],
  ]
);
