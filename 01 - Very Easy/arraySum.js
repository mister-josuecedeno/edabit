const arraySum = (arr) => {
  return +arr
    .reduce(
      (acc, cv) => acc + (cv % 2 == 0 ? Math.pow(cv, 2) : Math.sqrt(cv)),
      0
    )
    .toFixed(2);
};

// Tests

console.log(arraySum([1, 3, 3, 1, 10]), 105.46);
console.log(arraySum([0, 3, 3, 1, 10]), 104.46);
console.log(arraySum([1, 31, 3, 11, 0]), 11.62);
console.log(arraySum([1, 2, 3, 4, 5, 6, 8]), 124.97);
console.log(arraySum([2, 3, 4, 5]), 23.97);
