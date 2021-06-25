const rotatedWords = (words) => {
  const letters = ['H', 'I', 'N', 'O', 'S', 'X', 'Z', 'W'];
  let count = 0;

  // Empty check
  if (words === '') return count;

  // Unique list of words
  let unique = [...new Set(words.split(' '))];

  // Check if ALL letters are in letters[]
  const isReadable = (word) =>
    [...word].every((letter) => letters.includes(letter));

  // Check each word
  for (const word of unique) {
    if (isReadable(word)) count++;
  }

  return count;
};

// Tests
console.log(rotatedWords('MUBASHIR'), 0);
console.log(rotatedWords('HSSN'), 1);
console.log(rotatedWords('ON'), 1, 'Wrong result for "ON". It should be 1');
console.log(
  rotatedWords('OS IS UPDATED'),
  2,
  'Wrong result for "OS IS UPDATED". It should be 2'
);
console.log(
  rotatedWords('WHO IS WHO'),
  2,
  'Wrong result for "WHO IS WHO". It should be 2'
);
console.log(rotatedWords('JS'), 0, 'Wrong result for "JS". It should be 0');
console.log(
  rotatedWords('I III I III'),
  2,
  'Wrong result for "I III I III". It should be 2'
);
console.log(
  rotatedWords('SOS IN THE SEA'),
  2,
  'Wrong result for "SOS IN THE SEA". It should be 2'
);
console.log(
  rotatedWords('WHO IS rotatedWords AND WHO IS NO'),
  3,
  'Wrong result for "WHO IS rotatedWords AND WHO IS NO". It should be 3'
);
console.log(
  rotatedWords('SIN AND COS'),
  1,
  'Wrong result for "SIN AND COS". It should be 1'
);
console.log(
  rotatedWords('I HAVE A GOOD JOB'),
  1,
  'Wrong result for "I HAVE A GOOD JOB". It should be 1'
);
console.log(
  rotatedWords('HAVE A GOOD DAY'),
  0,
  'Wrong result for "HAVE A GOOD DAY". It should be 0'
);
console.log(rotatedWords(''), 0, 'Wrong result for "". It should be 0.');
//Mubashir
