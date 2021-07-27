const outlierNumber = (arr) => {
  const odd = arr.filter((n) => n % 2 !== 0);
  const even = arr.filter((n) => n % 2 === 0);
  return [odd, even].filter((l) => l.length === 1)[0][0];
};

// Tests

console.log(outlierNumber([2, 3, 4]), 3);
console.log(outlierNumber([1, 2, 3]), 2);
console.log(outlierNumber([4, 1, 3, 5, 9]), 4);
console.log(outlierNumber([2, 6, 8, 10, 3]), 3);
console.log(outlierNumber([2, 6, 8, 200, 700, 1, 84, 10, 4]), 1);
console.log(outlierNumber([17, 6, 8, 10, 6, 12, 24, 36]), 17);
console.log(outlierNumber([1, 1, 1, 1, 1, 44, 7, 7, 7, 7, 7, 7, 7, 7]), 44);
console.log(
  outlierNumber([
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 35, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    7, 7, 7, 7, 1000,
  ]),
  1000
);
console.log(outlierNumber([1, 0, 0]), 1);
console.log(outlierNumber([3, 7, -99, 81, 90211, 0, 7]), 0);
console.log(outlierNumber([2, -6, 8, -10, -3]), -3);
console.log(
  outlierNumber([2, 6, 8, 2, -66, 34, -35, 66, 700, 1002, -84, 10, 4]),
  -35
);
console.log(outlierNumber([-20, 1, 7, 17, 19, 211, 7]), -20);
console.log(outlierNumber([1, 1, -1, 1, 1, -44, 7, 7, 7, 7, 7, 7, 7, 7]), -44);
