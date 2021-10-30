const cumulativeSum = (arr) => {
  const result = [];
  let current = 0;

  arr.forEach(n => {
    current += n;
    result.push(current);
  });

  return result;
}

// Tests

console.log(cumulativeSum([]), [], 'Should return an empty array if given an empty array.')
console.log(cumulativeSum([1]), [1], 'Should work with 1 value.')
console.log(cumulativeSum([1, 2, 3]), [1, 3, 6], 'Should work with multiple values.')
console.log(cumulativeSum([-1, -2, -3]), [-1, -3, -6], 'Should work with multiple negative values.')
console.log(cumulativeSum([1, -2, 3]), [1, -1, 2], 'Should work with multiple positive and negative values.')
console.log(cumulativeSum([3, 3, -2, 408, 3, 3, 0, 66, 2, -2, 2, 3, 4, 2, -47, 3, 3, 2]), [3, 6, 4, 412, 415, 418, 418, 484, 486, 484, 486, 489, 493, 495, 448, 451, 454, 456], 'Should work with long array.')
