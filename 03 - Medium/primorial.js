const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

const primorial = (n) => {
  let count = 0;
  let i = 0;
  let result = 1;

  while (count < n) {
    if (isPrime(i)) {
      result *= i;
      count++;
    }
    i++;
  }

  return result;
};

// Tests

console.log(primorial(1), 2);
console.log(primorial(2), 6);
console.log(primorial(3), 30);
console.log(primorial(4), 210);
console.log(primorial(5), 2310);
console.log(primorial(8), 9699690);
console.log(primorial(9), 223092870);
