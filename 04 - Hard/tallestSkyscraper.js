// https://edabit.com/challenge/bJJTkKdyBwxWy4J3o

const tallestSkyscraper = (arr) => {
  const numColumns = arr[0].length;
  const columnTotals = new Array(numColumns).fill(0);

  for (let i = 0; i < numColumns; i++) {
    for (let j = 0; j < arr.length; j++) {
      columnTotals[i] += arr[j][i];
    }
  }

  return Math.max(...columnTotals);
};

// Tests

console.log(
  tallestSkyscraper([
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [1, 1, 1, 1],
  ]),
  3
);

console.log(
  tallestSkyscraper([
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [1, 1, 1, 1],
  ]),
  4
);

console.log(
  tallestSkyscraper([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 0],
    [1, 1, 1, 1],
  ]),
  2
);

console.log(
  tallestSkyscraper([
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ]),
  4
);

console.log(
  tallestSkyscraper([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1],
  ]),
  2
);

console.log(
  tallestSkyscraper([
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1],
  ]),
  5
);
