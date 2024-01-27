// https://edabit.com/challenge/m9pkGmuoEWsdHrNHi

// In progress
const getVowelCount = (word) => {
  const regex = /[aeiou]/gi;
  return (word.match(regex) || []).length;
};

const getConsonantCount = (word) => {
  const regex = /[^aeiou]/gi;
  return (word.match(regex) || []).length;
};

const stringCode = (sentence) => {
  // Loop through the sentence
  // split vowels and consonants
  // format the groups with spacing
  let word = 'test';
  return [getConsonantCount(word), getVowelCount(word)];
};

// Tests

console.log(stringCode("I'd like to drink my first glass of champagne."), [
  '1 2 1 4 2 4 4 1 6',
  '1 2 1 1 0 1 1 1 3',
]);
console.log(
  stringCode('The first man to walk on the moon was Neil Armstrong.'),
  ['2 4 2 1 3 1 2 2 2 2 7', '1 1 1 1 1 1 1 2 1 2 2']
);
console.log(stringCode("I've got a lovely bunch of coconuts."), [
  '1 2 0 4 4 1 5',
  '2 1 1 2 1 1 3',
]);
console.log(stringCode("There they are a'standing in a row."), [
  '3 3 1 6 1 0 2',
  '2 1 2 3 1 1 1',
]);
console.log(stringCode('Let them eat cake.'), ['2 3 1 2', '1 1 2 2']);
console.log(
  stringCode(
    'It does not matter how slowly you go as long as you do not stop.'
  ),
  ['1 2 2 4 2 5 1 1 1 3 1 1 1 2 3', '1 2 1 2 1 1 2 1 1 1 1 2 1 1 1']
);
console.log(stringCode('To be or not to be, that is the question.'), [
  '1 1 1 2 1 1 3 1 2 4',
  '1 1 1 1 1 1 1 1 1 4',
]);
console.log(stringCode("Believe you can and you're halfway there."), [
  '3 1 2 2 2 5 3',
  '4 2 1 1 3 2 2',
]);
