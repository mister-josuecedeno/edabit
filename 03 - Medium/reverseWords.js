const reverseWords = (string) => {
  const words = string.split(' ');
  const reversed = [];

  for (let i = words.length - 1; i >= 0; i--) {
    reversed.push(words[i]);
  }
  return reversed.join(' ');
};

// Tests

console.log(reverseWords('hello world!'), 'world! hello');
console.log(reverseWords('blue is sky the'), 'the sky is blue');
console.log(reverseWords('a good example'), 'example good a');
console.log(
  reverseWords('fraud! of example another is this'),
  'this is another example of fraud!'
);
console.log(reverseWords('man! the are You'), 'You are the man!');
