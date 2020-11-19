// Create a function that takes a word and extends all vowels by a number.

// regex, capturing groups, replace, repeat

// Solution
const extendVowels = (str, n) => {
  if (!(n >= 0 && Number.isInteger(n))) return 'invalid';
  return str.replace(/([aeiou])/gi, '$1'.repeat(n + 1));
};

// Tests
console.log(extendVowels('Hello', 5), 'Heeeeeelloooooo');
console.log(extendVowels('Edabit', 3), 'EEEEdaaaabiiiit');
console.log(extendVowels('Extend', 0), 'Extend');
console.log(extendVowels('A', 10), 'AAAAAAAAAAA');
console.log(extendVowels('Z', 93), 'Z');
console.log(extendVowels('Vowel', 0.5), 'invalid');
console.log(extendVowels('Nice', -8), 'invalid');
