// https://edabit.com/challenge/6xWP2WqWrhjbu2ZyG

const transposeMatrix = (arr) => {
  const result = [];

  for (let i = 0; i < arr[0].length; i++) {
    let columns = arr.map((a) => a[i]);
    result.push(columns);
  }

  return result;
};

// Tests

console.log(
  transposeMatrix([
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
  ]),
  [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ]
);

console.log(
  transposeMatrix([
    [1, 1, 1],
    [2, 2, 2],
  ]),
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ]
);

console.log(
  transposeMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]),
  [
    [1, 5, 9],
    [2, 6, 10],
    [3, 7, 11],
    [4, 8, 12],
  ]
);
