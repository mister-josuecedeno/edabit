// https://edabit.com/challenge/WYHgoTtdQHjjSvD7G

const isPrime = (n) => {
  let count = 0;

  for (let i = 1; i <= n && count < 3; i++) {
    if (n % i === 0) count++;
  }

  return count === 2;
};

const nextPrime = (n) => {
  while (isPrime(n) === false) {
    n++;
  }
  return n;
};

// Tests

console.log(nextPrime(12), 13);
console.log(nextPrime(24), 29);
console.log(nextPrime(11), 11);
console.log(nextPrime(13), 13);
console.log(nextPrime(14), 17);
console.log(nextPrime(33), 37);
