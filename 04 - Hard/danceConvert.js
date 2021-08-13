const danceConvert = (pin) => {
  const MOVES = [
    'Shimmy',
    'Shake',
    'Pirouette',
    'Slide',
    'Box Step',
    'Headspin',
    'Dosado',
    'Pop',
    'Lock',
    'Arabesque',
  ];

  // Check for invalid input
  const REGEX = /[0-9]{4}/g;
  const VALID = pin.match(REGEX);
  if (VALID === null) return 'Invalid input.';

  // Recalculate index if Number + Index > last index value
  const getIndex = (number, index) => {
    const NUM_OF_MOVES = MOVES.length;
    let currentIndex = number + index;

    if (number + index < NUM_OF_MOVES) return currentIndex;

    while (currentIndex >= NUM_OF_MOVES) {
      currentIndex -= NUM_OF_MOVES;
    }

    return currentIndex;
  };

  // Result
  let result = pin.split('').map((num, i) => MOVES[getIndex(+num, i)]);

  return result;
};

// Tests

console.log(danceConvert('0000'), ['Shimmy', 'Shake', 'Pirouette', 'Slide']);
console.log(danceConvert('5555'), ['Headspin', 'Dosado', 'Pop', 'Lock']);
console.log(danceConvert('8888'), ['Lock', 'Arabesque', 'Shimmy', 'Shake']);
console.log(danceConvert('0123'), [
  'Shimmy',
  'Pirouette',
  'Box Step',
  'Dosado',
]);
console.log(danceConvert('8765'), ['Lock', 'Lock', 'Lock', 'Lock']);
console.log(danceConvert('9104'), [
  'Arabesque',
  'Pirouette',
  'Pirouette',
  'Pop',
]);
console.log(danceConvert('3619'), ['Slide', 'Pop', 'Slide', 'Pirouette']);
console.log(danceConvert('9742'), ['Arabesque', 'Lock', 'Dosado', 'Headspin']);
console.log(danceConvert('a95f'), 'Invalid input.');
console.log(danceConvert('834'), 'Invalid input.');
console.log(danceConvert('+493'), 'Invalid input.');
console.log(danceConvert('-324'), 'Invalid input.');
