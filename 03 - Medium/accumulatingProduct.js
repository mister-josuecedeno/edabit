// Set-up

const accumulatingProduct = (second) => {
  return;
};

// Tests

console.log(accumulatingProduct([1, 2, 3, 4]), [1, 2, 6, 24]);
console.log(accumulatingProduct([5, 10, 1, 1]), [5, 50, 50, 50]);
console.log(accumulatingProduct([1, 5, 7]), [1, 5, 35]);
console.log(accumulatingProduct([1, 0, 1, 0]), [1, 0, 0, 0]);
console.log(accumulatingProduct([1]), [1]);
console.log(
  accumulatingProduct([1, 2, 2, 2, 2, 2, 2]),
  [1, 2, 4, 8, 16, 32, 64]
);
console.log(accumulatingProduct([1, 1, 1, 1, 1, 1, 1]), [1, 1, 1, 1, 1, 1, 1]);
console.log(accumulatingProduct([]), []);
