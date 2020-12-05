// Create a function that takes a 2D array
// as an argument and returns number (trace).

// Solution

const getTrace = (matrix) => {
  let trace = 0;
  let current;

  for (let i = 0; i < matrix.length; i++) {
    current = matrix[i][i] || 0;
    trace += current;
  }

  return trace;
};

// Tests
const matrix1 = [
  [0, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
console.log(getTrace(matrix1), 0);

const matrix2 = [
  [1, 1],
  [0, 42],
];
console.log(getTrace(matrix2), 43);

const matrix3 = [
  [0, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 0, 0, 0],
];
console.log(getTrace(matrix3), 0);

const matrix4 = [
  [0, 1],
  [0, 0],
  [0, 0],
];
console.log(getTrace(matrix4), 0);

const matrix5 = [
  [450, 1, 0, 0.789],
  [10000000, -450, 0, 1],
  [0, Math.PI, 2, -5],
  [0, 0, 0, 67],
];
console.log(getTrace(matrix5), 69);

const matrix6 = [
  [1.69, 1, 0],
  [10000000, 1.89, 0],
  [0, Math.PI, 2],
];
console.log(getTrace(matrix6), 5.58);
