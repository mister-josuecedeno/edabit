const wordBuilder = (letters, positions) => {
  return letters
    .map((l, i) => [l, positions[i]])
    .sort((a, b) => a[1] - b[1])
    .map((l) => l[0])
    .join('');
};

// Tests

console.log(wordBuilder(['e', 't', 's', 't'], [1, 3, 2, 0]), 'test');
console.log(
  wordBuilder(['b', 'e', 't', 'i', 'd', 'a'], [3, 0, 5, 4, 1, 2]),
  'edabit'
);
console.log(wordBuilder(['g', 'e', 'o'], [1, 0, 2]), 'ego');
console.log(
  wordBuilder(
    ['l', 'e', 'h', 'n', 'l', 'c', 'a', 'e', 'g'],
    [3, 5, 1, 6, 4, 0, 2, 8, 7]
  ),
  'challenge'
);
console.log(
  wordBuilder(
    ['e', 'i', 'l', 'g', 'x', 'h', 'p', 'o', 'c', 'r', 'i', 'a', 'c'],
    [1, 3, 0, 6, 2, 10, 9, 5, 4, 7, 11, 8, 12]
  ),
  'lexicographic'
);
console.log(
  wordBuilder(['s', 'o', 'r', 't', 'e', 'd'], [0, 1, 2, 3, 4, 5]),
  'sorted'
);
