// set-up
const percentFilled = (box) => {
  return box.flat().join('');
  // count o
  // count total
  // return percent
};

// Tests

console.log(
  percentFilled(['####', '#  #', '#o #', '####']),
  '25%',
  'One element out of four spaces.'
);

console.log(
  percentFilled(['#######', '#o oo #', '#######']),
  '60%',
  'Three elements out of five spaces.'
);

console.log(
  percentFilled(['######', '#ooo #', '#oo  #', '#    #', '#    #', '######']),
  '31%',
  'Five elements out of sixteen spaces.'
);

console.log(
  percentFilled(['####', '#  #', '####']),
  '0%',
  'Zero elements out of two spaces.'
);

console.log(
  percentFilled(['###', '#o#', '###']),
  '100%',
  'One element out of one space.'
);

// made by @Joshua Señoron
