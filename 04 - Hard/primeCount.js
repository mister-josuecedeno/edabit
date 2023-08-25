// https://edabit.com/challenge/kqeXu4S4cyfzNExk3

const isPrime = (n) => {
  let count = 0;

  for (let i = 1; i <= n && count < 3; i++) {
    if (n % i === 0) count++;
  }

  return count === 2;
};

const primeCount = (a, b) => {
  let count = 0;

  for (let i = a; i <= b; i++) {
    if (isPrime(i)) count++;
  }

  return count;
};

// Tests

console.log(primeCount(1, 10), 4);
console.log(primeCount(1, 100), 25);
console.log(primeCount(1, 1000), 168);
console.log(primeCount(1, 10000), 1229);
console.log(primeCount(1, 100000), 9592);
console.log(primeCount(2090, 2098), 0);
console.log(primeCount(548, 556), 0);
console.log(primeCount(3297, 4297), 128);
