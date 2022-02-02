const largestGap = (arr) => {
  const uniqueSorted = [...new Set(arr)].sort((a, b) => a - b);
  let gap = 0;
  let maxGap = 0;

  for (let i = 1; i < uniqueSorted.length; i++) {
    gap = uniqueSorted[i] - uniqueSorted[i - 1];
    if (gap > maxGap) maxGap = gap;
  }

  return maxGap;
};

// Tests

console.log(largestGap([9, 4, 26, 26, 0, 0, 5, 20, 6, 25, 5]), 11);
console.log(largestGap([14, 13, 7, 1, 4, 12, 3, 7, 7, 12, 11, 5, 7]), 4);
console.log(
  largestGap([1, 2, 2, 3, 4, 5, 5, 6, 8, 8, 9, 10, 11, 13, 13, 14]),
  2
);
console.log(largestGap([21, 28, 0, 5, 11, 6, 17, 25, 2, 19]), 6);
console.log(largestGap([8, 11, 24, 2, 7, 4, 4, 25, 24, 14, 8, 0, 7]), 10);
console.log(
  largestGap([26, 17, 4, 25, 29, 26, 8, 30, 4, 20, 2, 7, 29, 7, 20, 30, 23, 5]),
  9
);
