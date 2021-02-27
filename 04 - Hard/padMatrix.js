const padMatrix = (matrix) => {
  // First and last
  let howMany0s = matrix[0].length + 2;
  let fill = new Array(howMany0s).fill(0);

  // Add 0 to beginning and end
  matrix.forEach((row) => {
    row.unshift(0);
    row.push(0);
  });

  // add 0 fill to first row and last row
  matrix.unshift(fill);
  matrix.push(fill);

  return matrix;
};

// Tests

console.log(padMatrix([[]])); // ➞ [[0, 0], [0, 0], [0, 0]]

console.log(padMatrix([[9]])); //➞ [[0, 0, 0],[0, 9, 0],[0, 0, 0]]

console.log(padMatrix([['hi', true]]));

// ➞ [
//   [0, 0, 0, 0],
//   [0, "hi", True, 0],
//   [0, 0, 0, 0]
// ]

console.log(
  padMatrix([
    [1, 2, 5],
    [8, 6, 7],
    [3, 4, 9],
  ])
);

// ➞ [
//   [0, 0, 0, 0, 0],
//   [0, 1, 2, 5, 0],
//   [0, 8, 6, 7, 0],
//   [0, 3, 4, 9, 0],
//   [0, 0, 0, 0, 0]
// ]
