// https://edabit.com/challenge/qNTiqHJ6cDi6Tccny

const isCheckerboard = (arr) => {
  // Evaluate each row
  for (let r = 0; r < arr.length; r++) {
    if (arr[r] === arr[r + 1]) return false;

    // Evaluate each column
    for (let c = 0; c < arr.length; c++) {
      if (arr[r][c] === arr[r][c + 1]) return false;
    }
  }
  return true;
};

// Tests

console.log(
  isCheckerboard([
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
  ]),
  true
);

console.log(
  isCheckerboard([
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
  ]),
  true
);

console.log(
  isCheckerboard([
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 1, 1],
    [0, 1, 0, 1, 0],
  ]),
  false
);

console.log(
  isCheckerboard([
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [1, 1, 0, 1, 0],
  ]),
  false
);

console.log(
  isCheckerboard([
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 1, 1],
  ]),
  false
);

console.log(
  isCheckerboard([
    [0, 1],
    [1, 0],
  ]),
  true
);

console.log(
  isCheckerboard([
    [1, 1],
    [1, 0],
  ]),
  false
);

console.log(
  isCheckerboard([
    [1, 1],
    [0, 1],
  ]),
  false
);

console.log(
  isCheckerboard([
    [1, 0],
    [0, 1],
  ]),
  true
);

console.log(
  isCheckerboard([
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ]),
  true
);
