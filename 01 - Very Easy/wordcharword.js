// Create a function that will put the first argument, a character,
// between every word in the second argument, a string.

// Solution

const add = (chr, txt) => txt.split(' ').join(chr);

// Tests

console.log(add('#', 'hello world'), 'hello#world');
console.log(add('R', 'python is fun'), 'pythonRisRfun');
console.log(
  add('*', 'use .join() for this challenge'),
  'use*.join()*for*this*challenge'
);
console.log(add('#', ' '), '#');
