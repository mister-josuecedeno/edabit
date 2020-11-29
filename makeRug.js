// Write a function that accepts the width and height (m, n)
// and an optional proc s and generates an array with m elements.
// Each element is a string consisting of either:

// The default character (hash #) repeating n times (if no proc is given).
// The character passed in through the proc repeating n times.

// Solution
const makeRug = (m, n, s = '#') => {
  const rug = [];

  for (let i = 0; i < m; i++) {
    rug.push(s.repeat(n));
  }

  return rug;
};

// Tests
console.log(makeRug(3, 5), ['#####', '#####', '#####']);

console.log(makeRug(3, 5, '$'), ['$$$$$', '$$$$$', '$$$$$']);

console.log(makeRug(2, 2, 'A'), ['AA', 'AA']);
