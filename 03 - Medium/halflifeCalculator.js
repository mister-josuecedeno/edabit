const halflifeCalculator = (mass, hlife, n) => {
  let pct = 1;

  for (let i = 1; i <= n; i++) {
    pct /= 2;
  }

  mass = +(mass * pct).toFixed(3);
  return [mass, hlife * n];
};

// Tests

console.log(halflifeCalculator(1000, 5730, 2), [250, 11460]);
console.log(halflifeCalculator(1600, 6, 3), [200, 18]);
console.log(halflifeCalculator(13, 500, 1), [6.5, 500]);
console.log(halflifeCalculator(100, 35, 5), [3.125, 175]);
console.log(halflifeCalculator(11037, 53, 6), [172.453, 318]);
