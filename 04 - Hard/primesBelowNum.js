// https://edabit.com/challenge/Rgr2cba4Hp7kt47BW

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

const primesBelowNum = (n) => {
  const range = getRange(n);
  return range.filter((n) => isPrime(n));
};

// Tests

console.log(primesBelowNum(5), [2, 3, 5]);
console.log(primesBelowNum(10), [2, 3, 5, 7]);
console.log(primesBelowNum(20), [2, 3, 5, 7, 11, 13, 17, 19]);
console.log(primesBelowNum(6), [2, 3, 5]);
console.log(primesBelowNum(11), [2, 3, 5, 7, 11]);
console.log(primesBelowNum(21), [2, 3, 5, 7, 11, 13, 17, 19]);
console.log(primesBelowNum(7), [2, 3, 5, 7]);
console.log(primesBelowNum(12), [2, 3, 5, 7, 11]);
console.log(primesBelowNum(22), [2, 3, 5, 7, 11, 13, 17, 19]);
console.log(primesBelowNum(8), [2, 3, 5, 7]);
console.log(primesBelowNum(13), [2, 3, 5, 7, 11, 13]);
console.log(primesBelowNum(23), [2, 3, 5, 7, 11, 13, 17, 19, 23]);
