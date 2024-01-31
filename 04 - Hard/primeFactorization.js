// https://edabit.com/challenge/kHaeYQkdSmcmr8eZM

// Not my answer
function primeFactorization(num) {
  let factors = [];
  // Divide by 2 until no longer divisible
  while (num % 2 === 0) {
    factors.push(2);
    num = num / 2;
  }
  // Check for odd factors
  let factor = 3;
  let maxFactor = Math.sqrt(num);
  while (factor <= maxFactor) {
    while (num % factor === 0) {
      factors.push(factor);
      num = num / factor;
      maxFactor = Math.sqrt(num);
    }
    factor += 2;
  }
  // If num is a prime number greater than 2
  if (num > 2) {
    factors.push(num);
  }
  return factors;
}

// Example usage
console.log(primeFactorization(216)); // [2, 2, 2, 3, 3, 3]
console.log(primeFactorization(64)); // [2, 2, 2, 2, 2, 2]
console.log(primeFactorization(23)); // [23]

// Tests

console.log(primeFactorization(8), [2, 2, 2]);
console.log(primeFactorization(99), [3, 3, 11]);
console.log(primeFactorization(1), []);
console.log(primeFactorization(57), [3, 19]);
console.log(primeFactorization(100), [2, 2, 5, 5]);
