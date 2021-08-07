const basicCalculator = (num1, operator, num2) => {
  let result;
  if (num2 === 0) return null;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '*':
      result = num1 * num2;
      break;

    default:
      result = null;
      break;
  }

  return result;
};

// Tests

console.log(basicCalculator(2, '+', 4), 6);
console.log(basicCalculator(12, '-', 6), 6);
console.log(basicCalculator(18, '/', 2), 9);
console.log(basicCalculator(6, '*', 4), 24);
console.log(basicCalculator(2, '/', 0), null);
console.log(basicCalculator(2, 'x', 4), null);
console.log(basicCalculator(2, 'o', 4), null);
console.log(basicCalculator(12, '-', 2), 10);
console.log(basicCalculator(17, '*', 2), 34);
