// https://edabit.com/challenge/ufzPhQEbECxfvmSAu

const findMissing = (second) => {
  return;
};

// Tests

console.log(findMissing([[1], [1, 2], [4, 5, 1, 1], [5, 6, 7, 8, 9]]), 3);
console.log(findMissing([[5, 6, 7, 8, 9], [1, 2], [4, 5, 1, 1], [1]]), 3);
console.log(findMissing([[4, 4, 4, 4], [1], [3, 3, 3]]), 2);
console.log(findMissing([[false], [false, false, false]]), 2);
console.log(
  findMissing([
    ['f', 'r', 's'],
    ['d', 'e'],
    ['a', 'f', 'b', 'n'],
    ['z'],
    ['fg', 'gty', 'd', 'dfr', 'dr', 'q'],
  ]),
  5
);
console.log(
  findMissing([
    [5, 2, 9],
    [4, 5, 1, 1, 5, 6],
    [1, 1],
    [5, 6, 7, 8, 9],
  ]),
  4
);
console.log(
  findMissing([]),
  false,
  'When the main array is empty, return false.'
);
console.log(
  findMissing(null),
  false,
  'Return false if you are given null as an argument.'
);
console.log(
  findMissing([[], [1, 2, 2]]),
  false,
  'If an array within the parent array is empty, return false.'
);
