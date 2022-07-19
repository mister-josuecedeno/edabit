const isFactorial = (number, divBy = 2) => {
  let answer = number / divBy;
  if (answer === 1) return true;
  if (answer < 1) return false;
  return isFactorial(answer, ++divBy);
};

// Tests

console.log(isFactorial(6), true);
console.log(isFactorial(16), false);
console.log(isFactorial(24), true);
console.log(isFactorial(36), false);
console.log(isFactorial(720), true);
console.log(isFactorial(120), true);
