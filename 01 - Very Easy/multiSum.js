const multiSum = (num, ten = 10) => {
  // base case
  if (ten === 0) return 0;
  // recursion
  let result = num * ten;
  return result + multiSum(num, ten - 1);
};

// Tests
console.log(multiSum(1), 55);
console.log(multiSum(2), 110);
console.log(multiSum(3), 165);
console.log(multiSum(4), 220);
console.log(multiSum(5), 275);
console.log(multiSum(6), 330);
console.log(multiSum(7), 385);
console.log(multiSum(8), 440);
console.log(multiSum(9), 495);
console.log(multiSum(10), 550);
