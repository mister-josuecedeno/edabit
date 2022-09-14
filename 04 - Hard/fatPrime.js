// https://edabit.com/challenge/edP3JPvJHGigcYhQX

const isPrime = (n) => {
  let count = 0;

  for (let i = 1; i <= n && count < 3; i++) {
    if (n % i === 0) count++;
  }

  return count === 2;
};

const fatPrime = (a, b) => {
  const start = Math.min(a, b);
  const end = Math.max(a, b);

  for (let i = end; i > start; i--) {
    if (isPrime(i)) return i;
  }
};

// Tests

console.log(fatPrime(2, 10), 7);
console.log(fatPrime(10, 2), 7);
console.log(fatPrime(4, 24), 23);
console.log(fatPrime(16, 100), 97);
console.log(fatPrime(7, 49), 47);
console.log(fatPrime(200, 100), 199);
console.log(fatPrime(400, 1000), 997);
console.log(fatPrime(3297, 32970), 32969);
console.log(fatPrime(43297, 23175), 43291);
console.log(fatPrime(100000, 400000), 399989);
