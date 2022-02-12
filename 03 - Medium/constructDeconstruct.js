const constructDeconstruct = (str) => {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    result.push(str.slice(0, i + 1));
  }

  for (let i = str.length - 1; i > 0; i--) {
    result.push(str.slice(0, i));
  }

  return result;
};

// Tests

console.log(constructDeconstruct('Hello'), [
  'H',
  'He',
  'Hel',
  'Hell',
  'Hello',
  'Hell',
  'Hel',
  'He',
  'H',
]);

console.log(constructDeconstruct('edabit'), [
  'e',
  'ed',
  'eda',
  'edab',
  'edabi',
  'edabit',
  'edabi',
  'edab',
  'eda',
  'ed',
  'e',
]);

console.log(constructDeconstruct('the sun'), [
  't',
  'th',
  'the',
  'the ',
  'the s',
  'the su',
  'the sun',
  'the su',
  'the s',
  'the ',
  'the',
  'th',
  't',
]);

console.log(constructDeconstruct('so long partner'), [
  's',
  'so',
  'so ',
  'so l',
  'so lo',
  'so lon',
  'so long',
  'so long ',
  'so long p',
  'so long pa',
  'so long par',
  'so long part',
  'so long partn',
  'so long partne',
  'so long partner',
  'so long partne',
  'so long partn',
  'so long part',
  'so long par',
  'so long pa',
  'so long p',
  'so long ',
  'so long',
  'so lon',
  'so lo',
  'so l',
  'so ',
  'so',
  's',
]);
console.log(constructDeconstruct('s p a c e s'), [
  's',
  's ',
  's p',
  's p ',
  's p a',
  's p a ',
  's p a c',
  's p a c ',
  's p a c e',
  's p a c e ',
  's p a c e s',
  's p a c e ',
  's p a c e',
  's p a c ',
  's p a c',
  's p a ',
  's p a',
  's p ',
  's p',
  's ',
  's',
]);
console.log(constructDeconstruct('edabit is a awesome'), [
  'e',
  'ed',
  'eda',
  'edab',
  'edabi',
  'edabit',
  'edabit ',
  'edabit i',
  'edabit is',
  'edabit is ',
  'edabit is a',
  'edabit is a ',
  'edabit is a a',
  'edabit is a aw',
  'edabit is a awe',
  'edabit is a awes',
  'edabit is a aweso',
  'edabit is a awesom',
  'edabit is a awesome',
  'edabit is a awesom',
  'edabit is a aweso',
  'edabit is a awes',
  'edabit is a awe',
  'edabit is a aw',
  'edabit is a a',
  'edabit is a ',
  'edabit is a',
  'edabit is ',
  'edabit is',
  'edabit i',
  'edabit ',
  'edabit',
  'edabi',
  'edab',
  'eda',
  'ed',
  'e',
]);
console.log(constructDeconstruct('123456789'), [
  '1',
  '12',
  '123',
  '1234',
  '12345',
  '123456',
  '1234567',
  '12345678',
  '123456789',
  '12345678',
  '1234567',
  '123456',
  '12345',
  '1234',
  '123',
  '12',
  '1',
]);
console.log(constructDeconstruct(''), []);
console.log(constructDeconstruct('        '), [
  ' ',
  '  ',
  '   ',
  '    ',
  '     ',
  '      ',
  '       ',
  '        ',
  '       ',
  '      ',
  '     ',
  '    ',
  '   ',
  '  ',
  ' ',
]);

// made by @Joshua Señoron
