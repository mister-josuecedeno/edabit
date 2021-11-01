const median = (arr) => {
  arr.sort((a, b) => a - b);
  let lowMiddle = Math.floor((arr.length - 1) / 2);
  let highMiddle = Math.ceil((arr.length - 1) / 2);
  return (arr[lowMiddle] + arr[highMiddle]) / 2;
}

// Tests

console.log(median([20, 40, 20, 30, 50, 60, 70, 0, 20]), 30)
console.log(median([342, 98, 5456, 32, 786, 432, 890, 321]), 387)
console.log(median([1, 0, 1, 0, 0, 0, 1, 1]), 0.5)
console.log(median([32, 5, 78, 32, 4, 5, 3]), 5)
console.log(median([-20, 40, 30, -2, 40, -13]), 14)
console.log(median([32786, 7837, 83736, 83736, 10383, 738393]), 58261)
console.log(median([7685, 83736, 38376, 73638, 7337]), 38376)
console.log(median([0, 0, 0, 0]), 0)
console.log(median([-30, -42, -60, -10, -30, -50]), -36)
console.log(median([238, 432, 897, 710]), 571)
