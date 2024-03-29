// https://edabit.com/challenge/zYhCuzcXZn9PKG6ry

const getDiff = (arr) => {
  const differences = [];

  for (let i = arr.length - 1; i > 0; i--) {
    let diff = arr[i] - arr[i - 1];
    differences.unshift(diff);
  }

  return differences;
};

const nDifferences = (arr) => {
  let numbers = [...arr];

  while (numbers.length > 1) {
    numbers = getDiff([...numbers]);
  }

  return numbers[0];
};

// Tests

console.log(nDifferences([5, 1, 9, 3, 4, 0]), -80);
console.log(nDifferences([8, 9, 2, 5, 4, 3, 3, 1, 6]), -94);
console.log(nDifferences([5, 1, 9, 6, 1, 7, 3, 4]), 118);
console.log(nDifferences([1, 1, 1, 1]), 0);
console.log(nDifferences([5, 9, 7, 3]), 4);
console.log(nDifferences([1, 5, 3, 9, 7]), -30);
