// https://edabit.com/challenge/azvHrxCsbn7GrRu8y

// Not my solution
function primeFactors(n) {
  l = [];
  for (i = 2; n != 1; i++) {
    while (n % i == 0) {
      n /= i;
      l.push(i);
    }
  }
  return l;
}

// Tests

console.log(primeFactors(20), [2, 2, 5]);
console.log(primeFactors(100), [2, 2, 5, 5]);
console.log(primeFactors(8912234), [2, 47, 94811]);
