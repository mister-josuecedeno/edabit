const findDifference = (a, b) => {
  const volA = a.reduce((acc, cv) => acc * cv, 1);
  const volB = b.reduce((acc, cv) => acc * cv, 1);

  return Math.abs(volA - volB);
};

// Tests

console.log(findDifference([28, 16, 29], [7, 8, 17]), 12040);
console.log(findDifference([9, 22, 18], [16, 24, 10]), 276);
console.log(findDifference([1, 9, 25], [10, 7, 9]), 405);
console.log(findDifference([7, 6, 16], [26, 9, 26]), 5412);
console.log(findDifference([20, 19, 8], [5, 29, 1]), 2895);
console.log(findDifference([21, 6, 7], [25, 14, 17]), 5068);
console.log(findDifference([18, 29, 12], [24, 22, 4]), 4152);
console.log(findDifference([1, 16, 11], [26, 10, 17]), 4244);
console.log(findDifference([27, 11, 7], [2, 8, 26]), 1663);
console.log(findDifference([20, 17, 30], [20, 1, 13]), 9940);
console.log(findDifference([15, 7, 28], [3, 12, 11]), 2544);
console.log(findDifference([16, 17, 25], [18, 14, 28]), 256);
console.log(findDifference([1, 3, 22], [12, 23, 16]), 4350);
console.log(findDifference([3, 29, 12], [4, 9, 6]), 828);
console.log(findDifference([5, 18, 15], [16, 14, 26]), 4474);
console.log(findDifference([6, 14, 18], [30, 12, 22]), 6408);
