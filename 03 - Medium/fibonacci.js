const fibonacci = (n) => {
  const fib = [1, 1];
  let i = 2;
  let num = 0;

  while (i <= n) {
    num = fib[i - 1] + fib[i - 2];
    fib.push(num);
    i++;
  }

  return n <= 1 ? 1 : num;
};

// Tests

console.log(fibonacci(3), 3);
console.log(fibonacci(7), 21);
console.log(fibonacci(12), 233);
console.log(fibonacci(0), 1);
console.log(fibonacci(1), 1);
