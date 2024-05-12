// https://edabit.com/challenge/TaH2g7iSJBHgqJemi

const checkerBoard = (n, el1, el2) => {
  if (el1 == el2) return 'invalid';
  return;
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
