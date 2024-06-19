// https://edabit.com/challenge/E9Q3pBhdkPWg2EKfm

const table = function (func, start, end, step) {
  this.data = [];

  for (let i = start; i <= end; i += step) {
    this.data.push([i, func(i)]);
  }
};

// Tests

const myTable1 = new table(Math.abs, -5, 5, 1);
const myTable2 = new table(Math.floor, -2, 2, 0.25);
const myTable3 = new table(String, -2, 2, 1);
console.log(myTable1.data, [
  [-5, 5],
  [-4, 4],
  [-3, 3],
  [-2, 2],
  [-1, 1],
  [0, 0],
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5],
]);
console.log(myTable2.data, [
  [-2, -2],
  [-1.75, -2],
  [-1.5, -2],
  [-1.25, -2],
  [-1, -1],
  [-0.75, -1],
  [-0.5, -1],
  [-0.25, -1],
  [0, 0],
  [0.25, 0],
  [0.5, 0],
  [0.75, 0],
  [1, 1],
  [1.25, 1],
  [1.5, 1],
  [1.75, 1],
  [2, 2],
]);
console.log(myTable3.data, [
  [-2, '-2'],
  [-1, '-1'],
  [0, '0'],
  [1, '1'],
  [2, '2'],
]);
