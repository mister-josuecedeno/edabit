// https://edabit.com/challenge/pNNvNZQCz2DmvT59d

const whereIsWaldo = (second) => {
  return;
};

// Tests

console.log(
  whereIsWaldo([
    ['A', 'A', 'A'],
    ['A', 'A', 'A'],
    ['A', 'B', 'A'],
  ]),
  [3, 2]
);

console.log(
  whereIsWaldo([
    ['c', 'c', 'c', 'c'],
    ['c', 'c', 'c', 'd'],
  ]),
  [2, 4]
);

console.log(
  whereIsWaldo([
    ['O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O'],
    ['P', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O'],
  ]),
  [5, 1]
);

console.log(
  whereIsWaldo([
    ['X', 'X', 'Y', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
  ]),
  [1, 3]
);
