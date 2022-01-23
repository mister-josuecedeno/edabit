const isGoodMatch = (arr) => {
  if (arr.length % 2 !== 0) return 'bad match';
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      result.push(arr[i] + arr[i + 1]);
    }
  }

  return result;
};

// Tests

console.log(isGoodMatch([1, 2, 4, 7]), [3, 11]);
console.log(isGoodMatch([1, 2, 4]), 'bad match');
console.log(isGoodMatch([5, 7, 9, -1, 4, 2]), [12, 8, 6]);
console.log(isGoodMatch([1, 2, 3, 4, 5, 6]), [3, 7, 11]);
console.log(isGoodMatch([3, 6, 7, 9, -1]), 'bad match');
console.log(isGoodMatch([5, 7, 9, -1, 4, 2, 9]), 'bad match');
console.log(isGoodMatch([1, -1, 1, -1, 1, -1]), [0, 0, 0]);
