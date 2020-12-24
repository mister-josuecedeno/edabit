// Solution

// Understand the problem
// define the starting and end index
// change to zero after the starting index (be sure to stop at end)
// Note, the last row is excluded from the change

const lowerTriang = (arrays) => {
  let end = 1;
  let newArray = [];

  for (arr of arrays) {
    newArray.push([
      ...arr.slice(0, end),
      ...Array(arrays.length - end).fill(0),
    ]);

    end++;
  }

  return newArray;
};

// Tests
console.log(
  lowerTriang([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
  [
    [1, 0, 0],
    [4, 5, 0],
    [7, 8, 9],
  ]
);

console.log(
  lowerTriang([
    [5, 7],
    [7, 9],
  ]),
  [
    [5, 0],
    [7, 9],
  ]
);

console.log(
  lowerTriang([
    [1, 8, 8, 1],
    [2, 7, 7, 2],
    [3, 6, 6, 3],
    [4, 5, 5, 4],
  ]),
  [
    [1, 0, 0, 0],
    [2, 7, 0, 0],
    [3, 6, 6, 0],
    [4, 5, 5, 4],
  ]
);

console.log(
  lowerTriang([
    [1, 0],
    [7, 3],
  ]),
  [
    [1, 0],
    [7, 3],
  ]
);

console.log(
  lowerTriang([
    [0, 1, 2, 3, 4],
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6],
    [3, 4, 5, 6, 7],
    [4, 5, 6, 7, 8],
  ]),
  [
    [0, 0, 0, 0, 0],
    [1, 2, 0, 0, 0],
    [2, 3, 4, 0, 0],
    [3, 4, 5, 6, 0],
    [4, 5, 6, 7, 8],
  ]
);
