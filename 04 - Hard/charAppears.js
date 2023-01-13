// https://edabit.com/challenge/Mbmyf5Q2bXJvdtaiv

const charAppears = (sentence, char) => {
  let regex = new RegExp(char, 'gi');
  return sentence.split(' ').map((w) => (w.match(regex) || []).length);
};

// Tests
console.log(
  charAppears('She sells sea shells by the seashore.', 's'),
  [1, 2, 1, 2, 0, 0, 2]
);
console.log(
  charAppears('Peter Piper picked a peck of pickled peppers.', 'p'),
  [1, 2, 1, 0, 1, 0, 1, 3]
);
console.log(
  charAppears('She hiked in the morning, then swam in the river.', 't'),
  [0, 0, 0, 1, 0, 1, 0, 0, 1, 0]
);
console.log(
  charAppears('I scream, you scream, we all scream for ice cream.', 'f'),
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
);
console.log(charAppears('Snap, crackle, pop!', 'p'), [1, 0, 2]);
console.log(charAppears('What a wonderful world.', 'w'), [1, 0, 1, 1]);
