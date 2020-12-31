const returnNegative = (n) => {
  return Math.sign(n) === 1 ? -n : n;
};

// Tests
console.log(returnNegative(4), -4);
console.log(returnNegative(15), -15);
console.log(returnNegative(-4), -4);
console.log(returnNegative(42), -42);
console.log(returnNegative(-9), -9);
console.log(returnNegative(0), 0);
console.log(returnNegative(1), -1);
console.log(returnNegative(-1), -1);
