const getCount = (elements) => {
  const elementMap = new Map();

  for (const element of elements) {
    let value = elementMap.get(element) + 1 || 1;
    elementMap.set(element, value);
  }

  return Array.from(elementMap);
};

const duplicateNums = (nums) => {
  let result = getCount(nums)
    .filter((n) => n[1] > 1)
    .map((n) => n[0])
    .sort((a, b) => a - b);
  return result.length === 0 ? null : result;
};

// Tests

console.log(duplicateNums([1, 2, 3, 4, 3, 5, 6]), [3]);
console.log(duplicateNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), null);
console.log(duplicateNums([20, 30, 40, 30, 20, 40]), [20, 30, 40]);
console.log(duplicateNums([100, 59, 12, 13, 54, 76, 100, 14, 12]), [12, 100]);
console.log(
  duplicateNums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54]),
  [72, 81, 99]
);
console.log(
  duplicateNums([11, 22, 33, 44, 55, 44, 33, 22, 11]),
  [11, 22, 33, 44]
);
