const getMultiples = (n, multiple) => {
  const multiples = [];

  for (let i = 1; i <= n; i++) {
    multiples.push(i * multiple);
  }

  return multiples;
};

const multTable = (n) => {
  const table = [];
  let multiple = 1;

  for (let i = 0; i < n; i++) {
    table.push(getMultiples(n, multiple));
    multiple++;
  }

  return table;
};

// Tests

console.log(multTable(1), [[1]]);
console.log(multTable(2), [
  [1, 2],
  [2, 4],
]);
console.log(multTable(3), [
  [1, 2, 3],
  [2, 4, 6],
  [3, 6, 9],
]);
console.log(multTable(4), [
  [1, 2, 3, 4],
  [2, 4, 6, 8],
  [3, 6, 9, 12],
  [4, 8, 12, 16],
]);
console.log(multTable(5), [
  [1, 2, 3, 4, 5],
  [2, 4, 6, 8, 10],
  [3, 6, 9, 12, 15],
  [4, 8, 12, 16, 20],
  [5, 10, 15, 20, 25],
]);
