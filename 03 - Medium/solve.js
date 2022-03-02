const solve = (a, b) => {
  x = b - 3 * a + 4;
  y = a - b;
  return x == 0 && y == 0
    ? 'Any number'
    : y == 0
    ? 'No solution'
    : +(x / y).toFixed(3);
};

// Tests

console.log(solve(1, 2), -3.0);
console.log(solve(-4, -6), 5.0);
console.log(solve(4, 1), -2.333);
console.log(solve(3, 3), 'No solution');
console.log(solve(3, 2), -3.0);
console.log(solve(-2, -2), 'No solution');
console.log(solve(2, 2), 'Any number');
