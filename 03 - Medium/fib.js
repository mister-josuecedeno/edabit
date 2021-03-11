const fib = (n) => {
  if (n <= 1) return n;
  return fib(n - 2) + fib(n - 1);
};

// Tests

console.log(fib(2), 1);
console.log(fib(5), 5);
console.log(fib(8), 21);
console.log(fib(12), 144);
console.log(fib(0), 0);
console.log(fib(1), 1);
