const countAll = (str) => {
  return;
}

// Tests

console.log(countAll('Hello'), {'LETTERS': 5, 'DIGITS': 0});
console.log(countAll('137'), {'LETTERS': 0, 'DIGITS': 3});
console.log(countAll('H3LL0'), {'LETTERS': 3, 'DIGITS': 2});
console.log(countAll('149990'), {'LETTERS': 0, 'DIGITS': 6});
console.log(countAll('edabit 2018'), {'LETTERS': 6, 'DIGITS': 4}, 'Spaces are not letters.');
console.log(countAll('    '), {'LETTERS': 0, 'DIGITS': 0});
