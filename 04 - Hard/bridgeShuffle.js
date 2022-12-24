// https://edabit.com/challenge/8ZkrgupsQxf6f9xXR

const bridgeShuffle = (arr1, arr2) => {
  const result = [];

  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (arr1[i] != undefined) result.push(arr1[i]);
    if (arr2[i] != undefined) result.push(arr2[i]);
  }

  return result;
};

// Tests

console.log(bridgeShuffle(['A', 'A', 'A'], ['B', 'B', 'B']), [
  'A',
  'B',
  'A',
  'B',
  'A',
  'B',
]);
console.log(bridgeShuffle(['C', 'C', 'C', 'C'], ['D']), [
  'C',
  'D',
  'C',
  'C',
  'C',
]);
console.log(bridgeShuffle([1, 3, 5, 7], [2, 4, 6]), [1, 2, 3, 4, 5, 6, 7]);
console.log(bridgeShuffle([10, 9, 8], [1, 2, 3, 4]), [10, 1, 9, 2, 8, 3, 4]);
console.log(bridgeShuffle(['h', 'h', 'h'], ['a', 'a', 'a']), [
  'h',
  'a',
  'h',
  'a',
  'h',
  'a',
]);
