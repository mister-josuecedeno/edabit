const stringPairs = (word) => {
  const pairs = [];

  for (let i = 0; i < word.length; i += 2) {
    let second = word[i + 1] === undefined ? '*' : word[i + 1];
    pairs.push(word[i] + second);
  }

  return pairs;
};

// Tests

console.log(stringPairs('abcdef'), ['ab', 'cd', 'ef']);
console.log(stringPairs('abcdefg'), ['ab', 'cd', 'ef', 'g*']);
console.log(stringPairs(''), []);
console.log(stringPairs('pak'), ['pa', 'k*']);
console.log(stringPairs('mubashir'), ['mu', 'ba', 'sh', 'ir']);
console.log(stringPairs('edabit'), ['ed', 'ab', 'it']);
console.log(stringPairs('airforces'), ['ai', 'rf', 'or', 'ce', 's*']);
