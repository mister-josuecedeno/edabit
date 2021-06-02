const lessEqual = (numbers, k) => {
  if (k === 0 && numbers[0] === 1) return null;
  if (k === 0 && numbers[0] > 1) return 1;

  const sorted = [...numbers.sort((a, b) => a - b)];
  const kValue = sorted[k - 1];
  const lastK = sorted.lastIndexOf(kValue) + 1;

  return k === lastK ? kValue : null;
};

// Tests
console.log(lessEqual([3, 7, 6, 1, 10, 3, 20], 4), 6);
console.log(lessEqual([3, 7, 6, 1, 10, 3, 20], 2), null);
console.log(lessEqual([1, 1, 2, 3, 4], 3), 2);
console.log(lessEqual([1, 1, 2, 3, 4], 2), 1);
console.log(lessEqual([1, 1, 2, 3, 4], 1), null);
console.log(lessEqual([10, 15, 20, 25], 0), 1);
console.log(lessEqual([2, 2, 2, 3, 5, 7, 8], 2), null);
console.log(lessEqual([3, 7, 5, 1, 10, 3, 20], 2), null);
console.log(lessEqual([3, 7, 5, 1, 10, 3, 20], 4), 5);
console.log(lessEqual([1], 0), null);
console.log(lessEqual([2], 0), 1);
console.log(lessEqual([1000000000], 1), 1000000000);
console.log(
  lessEqual([1000000000, 1000000000, 1000000000, 1000000000], 4),
  1000000000
);
console.log(lessEqual([1, 3, 3, 4, 5], 3), 3);
console.log(lessEqual([1000000000], 1), 1000000000);
console.log(lessEqual([100000000, 100000000], 2), 100000000);
console.log(lessEqual([3, 4, 5, 6, 7], 0), 1);
