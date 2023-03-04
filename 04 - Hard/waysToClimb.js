// https://edabit.com/challenge/APCAgm5FRnnC7ar87

// Fibonacci numbers - not my solution
const fib = (n) => {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};

const waysToClimb = (n) => {
  return fib(n + 1);
};

// Tests

console.log(waysToClimb(0), 1);
console.log(waysToClimb(1), 1);
console.log(waysToClimb(2), 2);
console.log(waysToClimb(3), 3);
console.log(waysToClimb(4), 5);
console.log(waysToClimb(5), 8);
console.log(waysToClimb(6), 13);
console.log(waysToClimb(7), 21);
console.log(waysToClimb(15), 987);
console.log(waysToClimb(23), 46368);
