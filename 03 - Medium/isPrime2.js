const isPrime = (n) =>
  [...Array(n).keys()].map((k) => k + 1).filter((k) => n % k === 0).length ===
  2;

console.log(isPrime(100));
