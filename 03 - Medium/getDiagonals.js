// set-up
const getDiagonals = (arr) => {
  return;
};

// Tests

console.log(
  getDiagonals([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
  [
    [1, 5, 9],
    [3, 5, 7],
  ]
);

console.log(
  getDiagonals([
    ['e', 'z', 'y', 'o', 'p', 't'],
    ['b', 'd', 'a', 't', 'i', 'w'],
    ['u', 'l', 'a', 'n', 's', 'k'],
    ['s', 'v', 'k', 'b', 'r', 'z'],
    ['h', 'e', 'w', 'c', 'i', 'j'],
    ['r', 'p', 'y', 'd', 'x', 't'],
  ]),
  [
    ['e', 'd', 'a', 'b', 'i', 't'],
    ['t', 'i', 'n', 'k', 'e', 'r'],
  ]
);

console.log(
  getDiagonals([
    [true, false, true, false],
    [false, true, false, true],
    [true, false, true, false],
    [false, false, false, true],
  ]),
  [
    [true, true, true, true],
    [false, false, false, false],
  ]
);

console.log(
  getDiagonals([
    [0, 1, 1, 0, 1, 1, 1, 0, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
    [1, 0, 1, 1, 1, 0, 0, 1, 0, 1],
    [1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 0, 1, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 1, 0, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  ]),
  [
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [0, 1, 1, 0, 0, 1, 1, 1, 1, 1],
  ]
);

console.log(getDiagonals([['Trivial']]), [['Trivial'], ['Trivial']]);
console.log(getDiagonals([]), [[], []]);
