// Regex solution >>> const splitGroups = str => str.match(/(.)\1*/g);

const splitGroups = (str) => {
  const result = [];
  let letters = str[0];

  for (let i = 1; i < str.length + 1; i++) {
    if (str[i] !== str[i - 1]) {
      result.push(letters);
      letters = str[i];
    } else {
      letters += str[i];
    }
  }

  return result;
};

// Tests

console.log(splitGroups('aaabbbaabbab'), ['aaa', 'bbb', 'aa', 'bb', 'a', 'b']);
console.log(splitGroups('5556667788'), ['555', '666', '77', '88']);
console.log(
  splitGroups('abbbcc88999&&!!!_'),
  ['a', 'bbb', 'cc', '88', '999', '&&', '!!!', '_'],
  'It should work with special chars.'
);
console.log(splitGroups('555'), ['555']);
console.log(splitGroups('AABBCC'), ['AA', 'BB', 'CC']);
