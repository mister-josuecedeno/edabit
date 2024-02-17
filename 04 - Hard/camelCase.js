// https://edabit.com/challenge/fdfdgjo6vFYSunMdr

const toProperCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const camelCase = (str) => {
  const regex = /[A-Za-z0-9]+/g;
  const words = str.match(regex) || [];

  if (str === words.join('')) return str;

  return words
    .map((word, index) =>
      index === 0 ? word.toLowerCase() : toProperCase(word)
    )
    .join('');
};

// Tests

console.log(camelCase('fooBar'), 'fooBar');
console.log(camelCase('Foo      Bar'), 'fooBar');
console.log(camelCase('--foo-bar--'), 'fooBar');
console.log(camelCase('__FOO_BAR__-'), 'fooBar');
console.log(camelCase('foo123Bar'), 'foo123Bar');
console.log(camelCase('foo123Bar'), 'foo123Bar');
console.log(camelCase('foo_Bar'), 'fooBar');
