// set-up https://edabit.com/challenge/TCCFSPy3LeLRDGstw
// pending question on test case
const isProbMatrix = (arr) => {
  // same number of row and columns
  const isSquare = arr.every((r) => r.length === arr.length);

  // between 0 and 1
  const isProbablity = arr.flat().every((n) => (n >= 0) & (n <= 1));

  // row adds up to 1
  const isSumOfOne = arr.every((r) => r.reduce((acc, cv) => acc + cv, 0) === 1);

  return [isSquare, isProbablity, isSumOfOne].every((e) => e === true);
};

// Tests

console.log(
  isProbMatrix([
    [0.5, 0.5, 0.0],
    [0.2, 0.5, 0.3],
  ]),
  false,
  'Not a square matrix.'
);

console.log(
  isProbMatrix([
    [2, -1],
    [-1, 2],
  ]),
  false,
  'Entries are not probabilities.'
);

console.log(
  isProbMatrix([
    [0.5, 0.4],
    [0.5, 0.6],
  ]),
  false,
  'Rows do not add to 1.'
);

console.log(
  isProbMatrix([
    [0, 1],
    [1, 0],
  ]),
  true
);

console.log(
  isProbMatrix([
    [2, 1],
    [1, 2],
  ]),
  false
);

console.log(isProbMatrix([[1]]), true);

console.log(
  isProbMatrix([
    [0.5, 0.5, 0.0],
    [0.2, 0.5, 0.3],
    [0.1, 0.2, 0.7],
  ]),
  true
);

console.log(
  isProbMatrix([
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
  ]),
  true
);

console.log(
  isProbMatrix([
    [1, 0, 0, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [1, 0, 0, 1],
  ]),
  false
);

console.log(
  isProbMatrix([
    [0.5, 0.0, 0.5, 0.0],
    [0.1, 0.2, 0.3, 0.4],
    [0.3, 0.2, 0.2, 0.3],
    [0.0, 0.5, 0.0, 0.5],
  ]),
  true
);

console.log(
  isProbMatrix([
    [0.5, 0.5, 0.0],
    [0.2, 0.3, 0.3, 0.2],
    [0.1, 0.2, 0.7],
  ]),
  true
);
