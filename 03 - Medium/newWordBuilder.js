const wordBuilder = (letters, positions) => {
  return positions.map((p) => letters[p]).join('');
};

// Tests

console.log(wordBuilder(['g', 'e', 'o'], [1, 0, 2]), 'ego');
console.log(wordBuilder(['e', 't', 's', 't'], [3, 0, 2, 1]), 'test');
console.log(
  wordBuilder(['b', 'e', 't', 'i', 'd', 'a'], [1, 4, 5, 0, 3, 2]),
  'edabit'
);
console.log(
  wordBuilder(
    ['l', 'e', 'h', 'n', 'l', 'c', 'a', 'e', 'g'],
    [5, 2, 6, 4, 0, 1, 3, 8, 7]
  ),
  'challenge'
);
console.log(
  wordBuilder(['s', 'o', 'r', 't', 'e', 'd'], [0, 1, 2, 3, 4, 5]),
  'sorted'
);
