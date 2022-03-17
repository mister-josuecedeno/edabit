const split = (word) => {
  const regex = /[aeiou]+|[^aeiou]/gi;
  return word.match(regex);
};

// Tests

console.log(split('beautifully'), [
  'b',
  'eau',
  't',
  'i',
  'f',
  'u',
  'l',
  'l',
  'y',
]);
console.log(split('spoonful'), ['s', 'p', 'oo', 'n', 'f', 'u', 'l']);
console.log(split('swimming'), ['s', 'w', 'i', 'm', 'm', 'i', 'n', 'g']);
console.log(split('courage'), ['c', 'ou', 'r', 'a', 'g', 'e']);
console.log(split('cooing'), ['c', 'ooi', 'n', 'g']);
