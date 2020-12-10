// The challange is simple.
// Return a random integer N such that a <= N <= b.

// Solution
const randomInt = (a, b) => {
  return Math.floor(Math.random() * (b - a) + a);
};

// Test
console.log(randomInt(5, 9));
