// https://edabit.com/challenge/bJJTkKdyBwxWy4J3o

// refactor - returning the length of the array and not the sum
const tallestSkyscraper = (arr) => {
  const heights = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      heights[i] = (heights[i] || 0) + arr[i][j];
    }
  }

  return heights;
  //return Math.max(...heights);
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
