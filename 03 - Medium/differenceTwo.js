const differenceTwo = (nums) => {
  const sorted = [...nums.sort((a, b) => b - a)];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let max = sorted.shift();
    let twos = sorted.filter((n) => max - n === 2);
    twos.push(max);
    if (twos.length === 2) result.push(twos);
  }

  return result.sort((a, b) => a[0] - b[0]);
};

// Tests

console.log(differenceTwo([1, 2, 3, 4]), [
  [1, 3],
  [2, 4],
]);
console.log(differenceTwo([1, 23, 3, 4, 7]), [[1, 3]]);
console.log(differenceTwo([4, 3, 1, 5, 6]), [
  [1, 3],
  [3, 5],
  [4, 6],
]);
