const transposeMatrix = (mtx) => {
  let sentence = [];

  const getIndex = (index) => {
    return mtx.map((m) => m[index]).filter((u) => u !== undefined);
  };

  for (let i = 0; i < mtx.length; i++) {
    sentence.push(getIndex(i).join(' '));
  }

  return sentence
    .filter((e) => e.length > 0)
    .flat()
    .join(' ');
};

// Tests

console.log(
  transposeMatrix([['Enter'], ['the'], ['Matrix.']]),
  'Enter the Matrix.'
);

console.log(
  transposeMatrix([
    ['Unfortunately,', 'be', 'is.', 'see'],
    ['no', 'told', "You'll", 'it'],
    ['one', 'what', 'have', 'for'],
    ['can', 'Matrix', 'to', 'yourself.'],
  ]),
  "Unfortunately, no one can be told what Matrix is. You'll have to see it for yourself."
);

console.log(
  transposeMatrix([
    ['Matrix', 'that'],
    ['is', 'system'],
    ['a', 'is'],
    ['system', 'our'],
    ['Neo,', 'enemy.'],
  ]),
  'Matrix is a system Neo, that system is our enemy.'
);

console.log(
  transposeMatrix([
    ['If', 'killed', 'you'],
    ['you', 'in', 'die'],
    ['are', 'Matrix', 'here?'],
  ]),
  'If you are killed in Matrix you die here?'
);

console.log(
  transposeMatrix([
    ['As', 'human'],
    ['long', 'race'],
    ['as', 'will'],
    ['Matrix', 'never'],
    ['exists,', 'be'],
    ['the', 'free.'],
  ]),
  'As long as Matrix exists, the human race will never be free.'
);
