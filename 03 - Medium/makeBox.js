const makeBox = (n) => {
  const arr = [...Array(n)].map((_) => '#'.repeat(n));
  if (n < 3) return arr;

  return arr.map((r, i) =>
    i > 0 && i < n - 1 ? '#' + ' '.repeat(n - 2) + '#' : r
  );
};

// Tests

console.log(makeBox(5), ['#####', '#   #', '#   #', '#   #', '#####']);

console.log(makeBox(6), [
  '######',
  '#    #',
  '#    #',
  '#    #',
  '#    #',
  '######',
]);

console.log(makeBox(4), ['####', '#  #', '#  #', '####']);

console.log(makeBox(2), ['##', '##']);

console.log(makeBox(1), ['#']);
