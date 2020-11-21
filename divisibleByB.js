// You are given two numbers a and b.
// Create a function that returns the next number
// greater than a and b and divisible by b.

// Solution
const divisibleByB = (a, b) => {
  return b * (Math.floor(a / b) + 1);
};

// Tests
console.log(divisibleByB(17, 8), 24);

console.log(divisibleByB(98, 3), 99);

console.log(divisibleByB(14, 11), 22);
