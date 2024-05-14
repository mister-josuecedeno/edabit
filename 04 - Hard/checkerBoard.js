// https://edabit.com/challenge/TaH2g7iSJBHgqJemi

const checkerBoard = (n, el1, el2) => {
  // Check if the two elements are the same
  if (el1 === el2) {
    return 'invalid';
  }

  // Initialize the checkerboard array
  let board = [];

  // Fill the board with the alternating pattern
  for (let i = 0; i < n; i++) {
    board[i] = [];
    for (let j = 0; j < n; j++) {
      // Determine which element to place based on the sum of the indices
      if ((i + j) % 2 === 0) {
        board[i][j] = el1;
      } else {
        board[i][j] = el2;
      }
    }
  }

  return board;
};

// Tests

console.log(checkerBoard(3, 'A', 'B'), [
  ['A', 'B', 'A'],
  ['B', 'A', 'B'],
  ['A', 'B', 'A'],
]);

console.log(checkerBoard(2, 7, 6), [
  [7, 6],
  [6, 7],
]);

console.log(checkerBoard(3, 1, 0), [
  [1, 0, 1],
  [0, 1, 0],
  [1, 0, 1],
]);

console.log(checkerBoard(3, 0, 1), [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
]);

console.log(checkerBoard(4, 'c', 'd'), [
  ['c', 'd', 'c', 'd'],
  ['d', 'c', 'd', 'c'],
  ['c', 'd', 'c', 'd'],
  ['d', 'c', 'd', 'c'],
]);

console.log(checkerBoard(4, 'c', 'c'), 'invalid');
