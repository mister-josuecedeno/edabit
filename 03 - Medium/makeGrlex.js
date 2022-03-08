const makeGrlex = (arr) => {
  return arr.sort((a, b) => {
    let diff = a.length - b.length;
    if (diff === 0) {
      return a < b ? -1 : a > b ? 1 : 0;
    } else {
      return diff;
    }
  });
};

// Tests

console.log(
  makeGrlex(['small', 'big']),
  ['big', 'small'],
  'order first by size'
);
console.log(
  makeGrlex(['big', 'cat', 'ran', 'for', 'the', 'fat', 'rat']),
  ['big', 'cat', 'fat', 'for', 'ran', 'rat', 'the'],
  'If same size, order alphabetically.'
);
console.log(makeGrlex(['this', 'is', 'a', 'small', 'test']), [
  'a',
  'is',
  'test',
  'this',
  'small',
]);
console.log(
  makeGrlex([
    'let',
    'us',
    'try',
    'some',
    'long',
    'test',
    'to',
    'see',
    'if',
    'this',
    'works',
    'as',
    'it',
    'should',
  ]),
  [
    'as',
    'if',
    'it',
    'to',
    'us',
    'let',
    'see',
    'try',
    'long',
    'some',
    'test',
    'this',
    'works',
    'should',
  ]
);
