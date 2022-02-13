const isMiniSudoku = (square) => {
  const flatten = square.flat();
  const isInRange = Math.max(...flatten) === 9 && Math.min(...flatten) === 1;
  const isCorrectLength = [...new Set(flatten)].length === 9;
  return isInRange && isCorrectLength;
};

// Tests

console.log(
  isMiniSudoku([
    [1, 3, 2],
    [9, 7, 8],
    [4, 5, 6],
  ]),
  true
);
console.log(
  isMiniSudoku([
    [1, 1, 3],
    [6, 5, 4],
    [8, 7, 9],
  ]),
  false,
  '1 is included twice.'
);
console.log(
  isMiniSudoku([
    [0, 1, 2],
    [6, 4, 5],
    [9, 8, 7],
  ]),
  false,
  '0 is not in range 1-9.'
);
console.log(
  isMiniSudoku([
    [8, 9, 2],
    [5, 6, 1],
    [3, 7, 4],
  ]),
  true
);
console.log(
  isMiniSudoku([
    [2, 3, 4],
    [6, 7, 7],
    [8, 9, 1],
  ]),
  false,
  '7 is included twice.'
);
console.log(
  isMiniSudoku([
    [6, 5, 9],
    [4, 3, 8],
    [2, 1, 7],
  ]),
  true
);
console.log(
  isMiniSudoku([
    [4, 3, 5],
    [8, 1, 2],
    [9, 6, 7],
  ]),
  true
);
console.log(
  isMiniSudoku([
    [4, 3, 5],
    [8, 6, 2],
    [9, 6, 7],
  ]),
  false,
  '6 is included twice.'
);
