// set-up
const splitGroups = (str) => {
  const regex = /.+/g;
  return str.match(regex);
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
