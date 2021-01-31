const birthdayCakeCandles = (arr) => {
  return arr.filter((n) => n === Math.max(...arr)).length;
};

// Tests
console.log(birthdayCakeCandles([4, 4, 1, 3]), 2);
console.log(birthdayCakeCandles([3, 2, 1, 3]), 2);
console.log(birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25]), 4);
console.log(birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]), 5);
