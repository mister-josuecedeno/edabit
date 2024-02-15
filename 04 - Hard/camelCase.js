// https://edabit.com/challenge/fdfdgjo6vFYSunMdr

// In Progress
const camelCase = (str) => {
  const regex = /[a-z0-9]/gi;
  const match = str.match(regex);
  if (str === match.join('')) return str;
  return str.match(regex);
};

// Tests

console.log(camelCase('fooBar'), 'fooBar');
console.log(camelCase('Foo      Bar'), 'fooBar');
console.log(camelCase('--foo-bar--'), 'fooBar');
console.log(camelCase('__FOO_BAR__-'), 'fooBar');
console.log(camelCase('foo123Bar'), 'foo123Bar');
console.log(camelCase('foo123Bar'), 'foo123Bar');
console.log(camelCase('foo_Bar'), 'fooBar');
