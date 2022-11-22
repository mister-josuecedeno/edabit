// https://edabit.com/challenge/ddXhrbFi4ozxxgYdG

const replaceLast = (str, replacement) => {
  return str.replace(/,([^,]*)$/, replacement + '$1');
};

const wordsToSentence = (words) => {
  if (words === null) return '';
  words = words.filter((w) => w);
  return words.length === 0 ? '' : replaceLast(words.join(', '), ' and');
};

// Tests

console.log(
  wordsToSentence(['one', 'two', 'three', 'four']),
  'one, two, three and four'
);
console.log(wordsToSentence(['one', 'two', '', 'four']), 'one, two and four');
console.log(wordsToSentence(['one']), 'one');
console.log(wordsToSentence(['one', '', 'three']), 'one and three');
console.log(wordsToSentence(['one', 'two', '']), 'one and two');
console.log(
  wordsToSentence(['']),
  '',
  'An array containing an empty string should return an empty string.'
);
console.log(
  wordsToSentence([]),
  '',
  'An empty array should return an empty string.'
);
console.log(wordsToSentence(null), '', 'null should return an empty string.');
