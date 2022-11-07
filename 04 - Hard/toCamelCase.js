// https://edabit.com/challenge/xt4CMLpfFRuDTsJgC

const splitByDashOrUnderscore = (str) => {
  if (str.includes('_')) return str.split('_');
  if (str.includes('-')) return str.split('-');
};

const capitalize = (word, index) => {
  if (index === 0) return word;
  return word[0].toUpperCase() + word.slice(1);
};

const toCamelCase = (str) => {
  if (str === '') return '';
  const arr = splitByDashOrUnderscore(str);
  return arr.map((word, index) => capitalize(word, index)).join('');
};

// Tests

console.log(
  toCamelCase('the_stealth_warrior'),
  'theStealthWarrior',
  'Did not return correct value'
);
console.log(
  toCamelCase('The-Stealth-Warrior'),
  'TheStealthWarrior',
  'Did not return correct value'
);
console.log(toCamelCase('A-B-C'), 'ABC', 'Did not return correct value.');
console.log(
  toCamelCase(''),
  '',
  'An empty string was provided but not returned.'
);
