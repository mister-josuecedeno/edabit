const blahBlah = (str, n) => {
  let arr = str.split(' ');
  n = n > arr.length ? arr.length : n;
  let blahs = `${'blah '.repeat(n - 1)}blah...`;
  return `${arr.slice(0, -n).join(' ')} ${blahs}`.trimStart();
};

// Tests

console.log(
  blahBlah(
    'A function is a block of code which only runs when it is called',
    5
  ),
  'A function is a block of code which only blah blah blah blah blah...'
);
console.log(
  blahBlah('one two three four five', 2),
  'one two three blah blah...'
);
console.log(
  blahBlah('Sphinx of black quartz judge my vow', 10),
  'blah blah blah blah blah blah blah...'
);
console.log(
  blahBlah(
    'The quadratic formula is negative b plus or minus the square root of b squared subtract four ac all over two a',
    5
  ),
  'The quadratic formula is negative b plus or minus the square root of b squared subtract four blah blah blah blah blah...'
);
