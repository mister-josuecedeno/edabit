const lambdaDepth = (n) => {
  return n === 0 ? 'edabit' : () => lambdaDepth(n - 1);
};

// Tests

console.log(lambdaDepth(0), 'edabit', 'Depth: 0');
console.log(lambdaDepth(1)(), 'edabit', 'Depth: 1');
console.log(lambdaDepth(2)()(), 'edabit', 'Depth: 2');
console.log(typeof lambdaDepth(2)(), 'function', 'Depth: 2');

// The following for loop generates 20 additional test cases.
// For each integer k, the first test case calls lambda_depth(k)
// and checks that lambda_depth(k), when called k times, returns 'edabit'.
// The second test case checks if lambda_depth(k) returns a function.

for (k = 5; k < 15; k++) {
  n = k.toString();
  eval(
    'console.log(lambdaDepth(' +
      n +
      ')' +
      '()'.repeat(k) +
      ", 'edabit', 'Depth: " +
      n +
      "')"
  );
  console.log(typeof lambdaDepth(k), 'function', 'Depth: ' + n);
}
