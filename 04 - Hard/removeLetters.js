// https://edabit.com/challenge/Xpj88Ni3QxoCGFnne

const removeLetters = (letters, word) => {
  // for each array element check the string
  // reduce the size of the string reference each time
  return;
};

// Tests

console.log(removeLetters(['s', 't', 'r', 'i', 'n', 'g', 'w'], 'string'), [
  'w',
]);
console.log(
  removeLetters(['b', 'b', 'l', 'l', 'g', 'n', 'o', 'a', 'w'], 'balloon'),
  ['b', 'g', 'w']
);
console.log(removeLetters(['d', 'b', 't', 'e', 'a', 'i'], 'edabit'), []);
console.log(removeLetters(['t', 't', 'e', 's', 't', 'u'], 'testing'), [
  't',
  'u',
]);
