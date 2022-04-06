const swap = (a, b, c) => {
  return [a, b].filter((n) => n !== c)[0];
};

// Tests

console.log(swap(1, 0, 0), 1);
console.log(swap(1, 3, 1), 3);
console.log(swap(27, 31, 31), 27);
console.log(swap(1, 2, 2), 1);
console.log(swap(-3, 4, -3), 4);
console.log(swap(-2, 1, 1), -2);
console.log(swap(0, 2, 2), 0);
console.log(swap(9, -9, 9), -9);
console.log(swap(-3, -29, -3), -29);
console.log(swap(-29, -3, -3), -29);
