const probability = (arr, num) => {
  const numGtOrEqual = arr.filter(n => n >= num).length;
  return +(100 * numGtOrEqual / arr.length).toFixed(1);
}

// Tests

console.log(probability([14, 19, 2, 6], 12), 50.0)
console.log(probability([11, 10, 9, 18, 16, 18, 4, 3, 5], 13), 33.3)
console.log(probability([2, 13, 1, 11, 6, 9, 11, 14, 3], 15), 0.0)
console.log(probability([11, 6, 17, 2, 1, 16, 20, 15], 7), 62.5)
console.log(probability([12, 15, 12, 8, 20, 16, 1], 1), 100.0)
console.log(probability([15, 8, 12, 1, 11, 4], 4), 83.3)
console.log(probability([14, 11, 16, 3, 13, 14, 3], 8), 71.4)
console.log(probability([1, 4, 18, 19, 15, 3, 3, 11], 23), 0.0)
console.log(probability([9, 8, 17, 13, 17], 8), 100.0)
console.log(probability([4, 6, 2, 9, 15, 18, 8, 2, 10, 8], 6), 70.0)
console.log(probability([15, 4, 6, 11, 11, 17, 9, 16, 7, 4, 5, 10], 12), 25.0)
console.log(probability([7, 1, 5, 7, 15, 15, 16, 14], 2), 87.5)
console.log(probability([11, 4, 6, 7, 14, 4, 4], 8), 28.6)
console.log(probability([10, 10, 3, 18, 14, 1, 2, 19, 17, 2, 4, 11, 18, 6, 3], 11), 40.0)
