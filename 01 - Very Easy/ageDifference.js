// Create a function that determines the age difference
// between spouses in a household. The ages ages in years of
// the parents and their children are given in an array.

// Solution
const ageDifference = (years) => {
  const [spouse1, spouse2] = years.sort((a, b) => b - a);
  const diff = spouse1 - spouse2;

  if (diff === 0) return 'No age difference between spouses.';
  return diff === 1 ? '1 year' : `${diff} years`;
};

// Tests

console.log(ageDifference([29, 1, 6, 8, 28]), '1 year');
console.log(
  ageDifference([43, 86, 49, 86]),
  'No age difference between spouses.'
);
console.log(ageDifference([2, 4, 6, 32, 27]), '5 years');
console.log(ageDifference([55, 28, 25, 56, 20]), '1 year');
console.log(ageDifference([21, 56, 69, 18]), '13 years');
console.log(ageDifference([25, 70, 25, 26, 58]), '12 years');
console.log(
  ageDifference([10, 12, 44, 9, 44]),
  'No age difference between spouses.'
);
