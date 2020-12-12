// Solution

function sortWord(word) {
  return [...word].sort().join('');
}

// Tests

console.log(sortWord('dcba'), 'abcd');
console.log(
  sortWord('pneumonoultramicroscopicsilicovolcanoconiosis'),
  'aacccccceiiiiiilllmmnnnnooooooooopprrsssstuuv'
);
console.log(
  sortWord('Unpredictable'),
  'Uabcdeeilnprt',
  'Capital letters should come first!'
);
console.log(sortWord('a'), 'a');
console.log(sortWord('ability'), 'abiilty');
console.log(sortWord('able'), 'abel');
console.log(sortWord('about'), 'abotu');
console.log(sortWord('above'), 'abeov');
console.log(sortWord('accept'), 'accept');
