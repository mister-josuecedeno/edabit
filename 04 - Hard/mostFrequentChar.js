// https://edabit.com/challenge/2qZPtgxSvvktKMcrc

const charMap = (str) => {
  const charMap = {};

  for (const char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
};

// refactor - need to return multiple if tie
const getMaxValueKey = (obj) => {
  return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
};

const mostFrequentChar = (arr) => {
  const str = [...arr.join()].sort();
  const obj = charMap(str);
  return getMaxValueKey(obj);
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
