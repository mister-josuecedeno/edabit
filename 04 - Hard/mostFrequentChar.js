// https://edabit.com/challenge/2qZPtgxSvvktKMcrc

const charMap = (str) => {
  const charMap = {};

  for (const char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
};

const mostFrequentChar = (arr) => {
  return charMap();
};

// Tests

console.log(mostFrequentChar(['apple', 'bandage', 'yodel', 'make']), [
  'a',
  'e',
]);
console.log(mostFrequentChar(['music', 'madness', 'maniac', 'motion']), ['m']);
console.log(
  mostFrequentChar([
    'the',
    'hills',
    'are',
    'alive',
    'with',
    'the',
    'sound',
    'of',
    'music',
  ]),
  ['e', 'h', 'i']
);
console.log(mostFrequentChar(['let', 'them', 'eat', 'cake']), ['e']);
console.log(mostFrequentChar(['potion', 'master', 'professor', 'snape']), [
  'o',
  's',
]);
