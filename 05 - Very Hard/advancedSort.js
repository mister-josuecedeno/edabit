const advancedSort = (arr) => {
  const elMap = {};
  const result = [];

  // Get a count of each el
  for (const el of arr) {
    elMap[el] = elMap[el] + 1 || 1;
  }

  // create set (returns order of appearance)
  const unique = [...new Set(arr)];

  // create subarrays the size of the count
  for (const el of unique) {
    let size = elMap[el];
    let value = el;
    result.push(new Array(size).fill(value));
  }

  return result;
};

// Tests

console.log(advancedSort([1, 2, 1, 2]), [
  [1, 1],
  [2, 2],
]);
console.log(advancedSort([2, 1, 2, 1]), [
  [2, 2],
  [1, 1],
]);
console.log(advancedSort([3, 2, 1, 3, 2, 1]), [
  [3, 3],
  [2, 2],
  [1, 1],
]);
console.log(advancedSort([5, 5, 4, 3, 4, 4]), [[5, 5], [4, 4, 4], [3]]);
console.log(advancedSort([80, 80, 4, 60, 60, 3]), [
  [80, 80],
  [4],
  [60, 60],
  [3],
]);
console.log(advancedSort(['c', 'c', 'b', 'c', 'b', 1, 1]), [
  ['c', 'c', 'c'],
  ['b', 'b'],
  [1, 1],
]);
console.log(advancedSort([1234, 1235, 1234, 1235, 1236, 1235]), [
  [1234, 1234],
  [1235, 1235, 1235],
  [1236],
]);
console.log(advancedSort(['1234', '1235', '1234', '1235', '1236', '1235']), [
  ['1234', '1234'],
  ['1235', '1235', '1235'],
  ['1236'],
]);
