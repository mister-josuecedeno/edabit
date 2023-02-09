// https://edabit.com/challenge/Jqp5E7SNY3gYFBNRL

// Refactor using ChatGPT
/*
const wave = (str) => {
  const wave = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;
    wave.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
  }

  return wave;
};
*/

const wave = (str) => {
  const wave = [];

  for (let i = 0; i < str.length; i++) {
    let result = str.toLowerCase().split('');
    if (result[i] === ' ') continue;
    result[i] = result[i].toUpperCase();
    result = result.join('');
    wave.push(result);
  }

  return wave;
};

// Tests

console.log(wave('edabit'), [
  'Edabit',
  'eDabit',
  'edAbit',
  'edaBit',
  'edabIt',
  'edabiT',
]);
console.log(
  wave('dogs cats pigs'),
  [
    'Dogs cats pigs',
    'dOgs cats pigs',
    'doGs cats pigs',
    'dogS cats pigs',
    'dogs Cats pigs',
    'dogs cAts pigs',
    'dogs caTs pigs',
    'dogs catS pigs',
    'dogs cats Pigs',
    'dogs cats pIgs',
    'dogs cats piGs',
    'dogs cats pigS',
  ],
  'Ignore spaces.'
);
console.log(wave(' '), [], 'Ignore spaces.');
console.log(wave(''), [], 'An empty string should return an empty array.');
console.log(wave('g'), ['G']);
console.log(
  wave(' blue'),
  [' Blue', ' bLue', ' blUe', ' bluE'],
  'Space at the beginning.'
);
console.log(
  wave('green '),
  ['Green ', 'gReen ', 'grEen ', 'greEn ', 'greeN '],
  'Space at the end.'
);
