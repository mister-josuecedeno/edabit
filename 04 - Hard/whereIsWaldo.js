// https://edabit.com/challenge/pNNvNZQCz2DmvT59d

const whereIsWaldo = (arrs) => {
  let waldoIndex;
  let row = 0;
  for (const arr of arrs) {
    row++;
    if ([...new Set(arr)].length > 1) {
      let sort = [...arr].sort();
      let waldo = sort.every((a) => sort[0]) ? sort.at(-1) : sort[0];
      waldoIndex = arr.indexOf(waldo) + 1;
      break;
    }
  }
  return [row, waldoIndex];
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
