const movingPartition = (arr) => {
  const result = [];

  for (let i = 1; i < arr.length; i++) {
    let left = arr.slice(0, i);
    let right = arr.slice(i);
    result.push([left, right]);
  }

  return result;
};

// Tests

console.log(movingPartition([1, 2, 3, 4, 5]), [
  [[1], [2, 3, 4, 5]],
  [
    [1, 2],
    [3, 4, 5],
  ],
  [
    [1, 2, 3],
    [4, 5],
  ],
  [[1, 2, 3, 4], [5]],
]);
console.log(movingPartition([-1, -1, -1, -1]), [
  [[-1], [-1, -1, -1]],
  [
    [-1, -1],
    [-1, -1],
  ],
  [[-1, -1, -1], [-1]],
]);
console.log(movingPartition([8, 9, 10]), [
  [[8], [9, 10]],
  [[8, 9], [10]],
]);
console.log(movingPartition([]), []);
