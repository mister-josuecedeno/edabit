const cons = (arr) => {
  return arr
    .sort((a, b) => a - b)
    .map((n, i, a) => Math.abs(a[i + 1] - n))
    .slice(0, -1)
    .every((n) => n === 1);
};

// Tests

console.log(cons([5, 1, 4, 3, 2]), true);
console.log(cons([55, 59, 58, 56, 57]), true);
console.log(cons([-3, -2, -1, 1, 0]), true);
console.log(cons([5, 1, 4, 3, 2, 8]), false);
console.log(cons([5, 6, 7, 8, 9, 9]), false);
console.log(cons([5, 3]), false);
