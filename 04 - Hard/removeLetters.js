// https://edabit.com/challenge/Xpj88Ni3QxoCGFnne

const removeLetters = (letters, word) => {
  for (let i = 0; i < word.length; i++) {
    let currentLetter = word[i];
    let location = letters.indexOf(currentLetter);
    if (location != -1) letters.splice(location, 1);
  }

  return letters;
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
