// Not my solution - https://edabit.com/challenge/zWf4ayT7nbTsxYgRe
function primeFactorize(num) {
  let factors = [];
  for (let i = 2; i <= num; i++) {
    while (!(num % i)) {
      factors.push(i);
      num /= i;
    }
  }
  return factors;
}

// Tests

console.log(primeFactorize(32), [2, 2, 2, 2, 2]);
console.log(primeFactorize(17), [17]);
console.log(primeFactorize(35), [5, 7]);
console.log(primeFactorize(2), [2]);
console.log(primeFactorize(2), [1, 2]);
console.log(primeFactorize(1), [1]);
console.log(primeFactorize(35), [7, 5]);
console.log(primeFactorize(2591), [2591]);
console.log(primeFactorize(2532), [2, 2, 3, 211]);
