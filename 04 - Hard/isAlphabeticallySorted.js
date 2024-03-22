// https://edabit.com/challenge/od9GF2tQKyLAvre8Z

const isSorted = (word) => {
  return word === [...word].sort().join('');
};

const isAlphabeticallySorted = (sentence) => {
  const words = sentence
    .slice(0, -1)
    .split(' ')
    .filter((w) => w.length > 2);
  return words.map((w) => isSorted(w)).filter((w) => w).length >= 1;
};

// Tests

console.log(isAlphabeticallySorted('Paula has a French accent.'), true);
console.log(
  isAlphabeticallySorted('The biopsy returned negative results.'),
  true
);
console.log(
  isAlphabeticallySorted('She sells sea shells by the sea shore.'),
  false
);
console.log(
  isAlphabeticallySorted('She almost reached the top of Mt. Everest.'),
  true
);
console.log(
  isAlphabeticallySorted('She was happy with how her earring hoops looked.'),
  true
);
console.log(
  isAlphabeticallySorted('Beth dislikes eating starfruit but enjoys cherries.'),
  false
);
console.log(
  isAlphabeticallySorted(
    'Elinor is inside on a rainy day sipping hot chocolate.'
  ),
  true
);
console.log(isAlphabeticallySorted('Mara took a photograph.'), false);
