// https://edabit.com/challenge/Jqp5E7SNY3gYFBNRL
// Need to install npm and node

const wave = (str) => {
  const wave = [];

  for (let i = 0; i < str.length; i++) {
    str.toLowerCase();
    str[i].toUpperCase();
    wave.push(str);
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
