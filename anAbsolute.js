// Given a sentence, create a function that replaces every "a" with "an absolute".
// It should return the string itself if it doesn't have any "a".

// Solution
const absolute = (str) => {
  const insertText = 'n absolute';
  const regex = /[Aa] /;
  let searchText, left, right;

  // searching for 'A ' or 'a ' to replace with [insert]
  for (let i = 0; i < str.length; i++) {
    searchText = `${str[i]}${str[i + 1]}`;
    left = str.substring(0, i + 1);
    right = str.substring(i + 1);
    if (regex.test(searchText)) {
      str = left + insertText + right;
    }
  }

  return str;
};

// Tests

console.log(absolute('I am a champion!!!'), 'I am an absolute champion!!!');
console.log(absolute('Such an amazing bowler.'), 'Such an amazing bowler.');
console.log(absolute('A hero of the leaf'), 'An absolute hero of the leaf');
console.log(
  absolute('That place is such a beauty'),
  'That place is such an absolute beauty'
);
console.log(
  absolute('A man with no haters.'),
  'An absolute man with no haters.'
);
