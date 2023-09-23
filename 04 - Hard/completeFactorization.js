// https://edabit.com/challenge/a78cwfLkCepCmCkQ2
// Not my solution

function completeFactorization(num) {
  arr = [];
  while (num > 1) {
    for (i = 2; i <= num; i++) {
      if (num % i == 0) break;
    }
    arr.push(i);
    num = num / i;
  }
  return arr;
}

// Tests

console.log(completeFactorization(30), [2, 3, 5]);
console.log(completeFactorization(12), [2, 2, 3]);
console.log(completeFactorization(15), [3, 5]);
console.log(completeFactorization(48), [2, 2, 2, 2, 3]);
console.log(completeFactorization(311), [311]);
console.log(completeFactorization(17), [17]);
console.log(completeFactorization(44), [2, 2, 11]);
console.log(completeFactorization(10), [2, 5]);
console.log(completeFactorization(9), [3, 3]);
console.log(completeFactorization(72), [2, 2, 2, 3, 3]);
