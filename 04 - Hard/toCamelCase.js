// https://edabit.com/challenge/xt4CMLpfFRuDTsJgC

// Refactor

const splitByDashOrUnderscore = (str) => {
  if (str.includes('_')) return str.split('_');
  if (str.includes('-')) return str.split('-');
};

const toCamelCase = (str) => {
  if (str === '') return '';
  const arr = splitByDashOrUnderscore(str);
  const upperCaseAll = arr.map((w) => w[0].toUpperCase() + w.slice(1)).join('');
  return upperCaseAll[0].toLowerCase() + upperCaseAll.slice(1);
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
