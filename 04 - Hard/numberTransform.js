// https://edabit.com/challenge/mrteErHiwHpWGo2vo

// Not my solution
function numberTransform(n, m) {
  return n != m
    ? m % n == 0
      ? 1 + numberTransform(n * 2, m)
      : 1 + numberTransform(n >> 1, m)
    : 0;
}

// Tests

console.log(numberTransform(1, 1), 0);
console.log(numberTransform(2, 4), 1);
console.log(numberTransform(3, 8), 4);
console.log(numberTransform(4, 16), 2);
console.log(numberTransform(4, 1), 2);
console.log(numberTransform(1, 4), 2);
console.log(numberTransform(1024, 1024), 0);
console.log(numberTransform(2048, 1024), 1);
console.log(numberTransform(2048, 2), 10);
console.log(numberTransform(4096, 2), 11);
console.log(numberTransform(4096, 1), 12);
// Mubashir
