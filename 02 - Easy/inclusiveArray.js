// Write a function that, given the start startNum and end endNum values,
// return an array containing all the numbers inclusive to that range.

// Solution
const getRange = (start, end) => {
  return;
};

const inclusiveArray = (startNum, endNum) => {
  let arr = [];

  for (let i = startNum; i <= endNum; i++) {
    arr.push(i);
  }

  return startNum > endNum ? [startNum] : arr;
};

// Tests

console.log(inclusiveArray(1, 5), [1, 2, 3, 4, 5]);

console.log(inclusiveArray(2, 8), [2, 3, 4, 5, 6, 7, 8]);

console.log(
  inclusiveArray(10, 20),
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
);

console.log(inclusiveArray(17, 5), [17]);
