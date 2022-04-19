const multiply = (n1, n2) => {
  let result = 0;
  for (let i = 0; i < Math.abs(n2); i++) {
    result += Math.abs(n1);
  }

  const isNegative = Math.sign(n1) + Math.sign(n2) === 0;
  return isNegative ? -result : result;
};

// Tests

console.log(multiply(3, 2), 6);
console.log(multiply(9, 1), 9);
console.log(multiply(2, 2), 4);
console.log(multiply(1, 1), 1);
console.log(multiply(702, 392), 275184);
console.log(multiply(9, 9), 81);
console.log(multiply(40, 31), 1240);
console.log(multiply(4, 10), 40);
console.log(multiply(-2, 4), -8);
console.log(multiply(-3, -20), 60);
console.log(multiply(40, -10), -400);
