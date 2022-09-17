// https://edabit.com/challenge/aHHyBptSxSfyzbWaX

const getRange = (end) => {
  return Array.from({ length: end }, (_, i) => i + 1);
};

const isPrime = (n) => {
  let count = 0;

  for (let i = 1; i <= n && count < 3; i++) {
    if (n % i === 0) count++;
  }

  return count === 2;
};

const primeNumbers = (num) => {
  const range = getRange(num);
  return range.filter((n) => isPrime(n)).length;
};

// Tests

console.log(primeNumbers(20), 8);
console.log(primeNumbers(30), 10);
console.log(primeNumbers(100), 25);
console.log(primeNumbers(200), 46);
console.log(primeNumbers(1000), 168);
console.log(primeNumbers(-5), 0);
console.log(primeNumbers(66), 18);
console.log(primeNumbers(133), 32);
console.log(primeNumbers(99), 25);
