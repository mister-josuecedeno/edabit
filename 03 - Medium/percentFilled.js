const percentFilled = (box) => {
  let spaces = (box[0].length - 2) * (box.length - 2);
  let str = (box.flat().join('').match(/o/g) || []).length;
  return ((str / spaces) * 100).toFixed(0) + '%';
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
