// Solution
const derivative = (b, m) => {
  return b * m ** (b - 1);
};

// Tests
console.log(derivative(1, 4), 1);
console.log(derivative(3, -2), 12);
console.log(derivative(4, -3), -108);
console.log(derivative(9, -5), 3515625);
console.log(derivative(1254, 0), 0);
console.log(derivative(-2, 10), -0.002);
