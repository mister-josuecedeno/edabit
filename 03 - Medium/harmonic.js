const harmonic = (n) => {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += 1 / i;
  }

  return +result.toFixed(3);
};

// Tests

console.log(harmonic(10), 2.929);
console.log(harmonic(1), 1);
console.log(harmonic(12345), 9.998);
console.log(harmonic(0), 0);
console.log(harmonic(5000), 9.095);
console.log(harmonic(2), 1.5);
