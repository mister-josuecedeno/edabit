// Create a function that accepts a string as an
// argument and returns the first non-repeated character.

const firstNonRepeatedCharacter = (str) => {
  const charMap = {};
  if (str === '') return false;

  for (let i = 0; i < str.length; i++) {
    charMap[str[i]] = charMap[str[i]] + 1 || 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ' && charMap[str[i]] === 1) {
      return str[i];
    }
  }

  return false;
};

// Tests
console.log(
  firstNonRepeatedCharacter('the quick brown fox jumps then quickly blows air'),
  'f'
);
console.log(
  firstNonRepeatedCharacter(
    'the misty examination pleases into the drab county'
  ),
  'x'
);
console.log(
  firstNonRepeatedCharacter('hheelloo'),
  false,
  'Return false when every character repeats.'
);
console.log(
  firstNonRepeatedCharacter(
    'it was then the darling top met the whispering wing'
  ),
  'd'
);
console.log(
  firstNonRepeatedCharacter(''),
  false,
  'An empty string should return false.'
);
console.log(
  firstNonRepeatedCharacter('it was then the frothy word met the round night'),
  'a'
);
console.log(
  firstNonRepeatedCharacter('is the remind zone better than the section'),
  'm'
);
console.log(firstNonRepeatedCharacter('b'), 'b');
console.log(
  firstNonRepeatedCharacter('what if the brainy boss ate the afternoon'),
  'w'
);
console.log(
  firstNonRepeatedCharacter(
    'the sympathetic mixture rejects into the leafy objective'
  ),
  'p'
);
