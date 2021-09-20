const isPrime = (n) => {
  let count = 0;

  for (let i = 1; i <= n && count < 3; i++) {
    if(n % i === 0) count++;
  }

  return count === 2;
}

// Tests

console.log(isPrime(31), true)
console.log(isPrime(18), false)
console.log(isPrime(11), true)
console.log(isPrime(12), false)
console.log(isPrime(1), false)
console.log(isPrime(3), true)
console.log(isPrime(48), false)
console.log(isPrime(10), false)
console.log(isPrime(5), true)
console.log(isPrime(77), false)
console.log(isPrime(7), true)
