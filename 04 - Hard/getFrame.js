// https://edabit.com/challenge/tu5oTshmsjJQcJjmZ

const getFrame = (w, h, ch) => {
  if (w <= 2 || h <= 2) return 'invalid';

  const result = [];
  const lid = [ch.repeat(w)];
  const fill = ' '.repeat(w - 2);
  const side = ch + fill + ch;

  result.push(lid);

  for (let i = 0; i < h - 2; i++) {
    result.push([side]);
  }

  result.push(lid);

  return result;
};

// Tests

console.log(getFrame(3, 3, '0'), [['000'], ['0 0'], ['000']]);

console.log(getFrame(4, 5, '#'), [
  ['####'],
  ['#  #'],
  ['#  #'],
  ['#  #'],
  ['####'],
]);

console.log(getFrame(10, 3, '*'), [
  ['**********'],
  ['*        *'],
  ['**********'],
]);

console.log(getFrame(2, 5, '0'), 'invalid');
console.log(getFrame(1, 6, '['), 'invalid');
console.log(getFrame(5, 4, 'z'), [['zzzzz'], ['z   z'], ['z   z'], ['zzzzz']]);
console.log(getFrame(3, 4, 'A'), [['AAA'], ['A A'], ['A A'], ['AAA']]);
console.log(getFrame(10, 2, '`'), 'invalid');
console.log(getFrame(10, 4, 'l'), [
  ['llllllllll'],
  ['l        l'],
  ['l        l'],
  ['llllllllll'],
]);
console.log(getFrame(5, 9, 'Z'), [
  ['ZZZZZ'],
  ['Z   Z'],
  ['Z   Z'],
  ['Z   Z'],
  ['Z   Z'],
  ['Z   Z'],
  ['Z   Z'],
  ['Z   Z'],
  ['ZZZZZ'],
]);
console.log(getFrame(4, 6, 'J'), [
  ['JJJJ'],
  ['J  J'],
  ['J  J'],
  ['J  J'],
  ['J  J'],
  ['JJJJ'],
]);
console.log(getFrame(3, 4, 'R'), [['RRR'], ['R R'], ['R R'], ['RRR']]);
console.log(getFrame(3, 6, 'Q'), [
  ['QQQ'],
  ['Q Q'],
  ['Q Q'],
  ['Q Q'],
  ['Q Q'],
  ['QQQ'],
]);
console.log(getFrame(3, 3, '^'), [['^^^'], ['^ ^'], ['^^^']]);
console.log(getFrame(5, 2, 'F'), 'invalid');
console.log(getFrame(3, 8, 'J'), [
  ['JJJ'],
  ['J J'],
  ['J J'],
  ['J J'],
  ['J J'],
  ['J J'],
  ['J J'],
  ['JJJ'],
]);
console.log(getFrame(7, 10, '`'), [
  ['```````'],
  ['`     `'],
  ['`     `'],
  ['`     `'],
  ['`     `'],
  ['`     `'],
  ['`     `'],
  ['`     `'],
  ['`     `'],
  ['```````'],
]);
console.log(getFrame(6, 6, 'v'), [
  ['vvvvvv'],
  ['v    v'],
  ['v    v'],
  ['v    v'],
  ['v    v'],
  ['vvvvvv'],
]);
console.log(getFrame(7, 2, '?'), 'invalid');
console.log(getFrame(3, 10, ':'), [
  [':::'],
  [': :'],
  [': :'],
  [': :'],
  [': :'],
  [': :'],
  [': :'],
  [': :'],
  [': :'],
  [':::'],
]);
console.log(getFrame(6, 7, 'N'), [
  ['NNNNNN'],
  ['N    N'],
  ['N    N'],
  ['N    N'],
  ['N    N'],
  ['N    N'],
  ['NNNNNN'],
]);
console.log(getFrame(7, 5, 'h'), [
  ['hhhhhhh'],
  ['h     h'],
  ['h     h'],
  ['h     h'],
  ['hhhhhhh'],
]);
console.log(getFrame(7, 5, '!'), [
  ['!!!!!!!'],
  ['!     !'],
  ['!     !'],
  ['!     !'],
  ['!!!!!!!'],
]);
console.log(getFrame(2, 3, 'F'), 'invalid');
console.log(getFrame(1, 2, 'E'), 'invalid');
console.log(getFrame(6, 3, 'j'), [['jjjjjj'], ['j    j'], ['jjjjjj']]);
console.log(getFrame(4, 7, 'J'), [
  ['JJJJ'],
  ['J  J'],
  ['J  J'],
  ['J  J'],
  ['J  J'],
  ['J  J'],
  ['JJJJ'],
]);
console.log(getFrame(8, 3, '`'), [['````````'], ['`      `'], ['````````']]);
console.log(getFrame(6, 8, 'V'), [
  ['VVVVVV'],
  ['V    V'],
  ['V    V'],
  ['V    V'],
  ['V    V'],
  ['V    V'],
  ['V    V'],
  ['VVVVVV'],
]);
console.log(getFrame(6, 2, '+'), 'invalid');
console.log(getFrame(4, 1, 'l'), 'invalid');
console.log(getFrame(4, 8, 'L'), [
  ['LLLL'],
  ['L  L'],
  ['L  L'],
  ['L  L'],
  ['L  L'],
  ['L  L'],
  ['L  L'],
  ['LLLL'],
]);
console.log(getFrame(10, 7, 'C'), [
  ['CCCCCCCCCC'],
  ['C        C'],
  ['C        C'],
  ['C        C'],
  ['C        C'],
  ['C        C'],
  ['CCCCCCCCCC'],
]);
console.log(getFrame(4, 6, 'T'), [
  ['TTTT'],
  ['T  T'],
  ['T  T'],
  ['T  T'],
  ['T  T'],
  ['TTTT'],
]);
console.log(getFrame(9, 1, 't'), 'invalid');
console.log(getFrame(9, 7, '&'), [
  ['&&&&&&&&&'],
  ['&       &'],
  ['&       &'],
  ['&       &'],
  ['&       &'],
  ['&       &'],
  ['&&&&&&&&&'],
]);
console.log(getFrame(3, 1, '('), 'invalid');
console.log(getFrame(10, 8, '<'), [
  ['<<<<<<<<<<'],
  ['<        <'],
  ['<        <'],
  ['<        <'],
  ['<        <'],
  ['<        <'],
  ['<        <'],
  ['<<<<<<<<<<'],
]);
console.log(getFrame(8, 6, 'O'), [
  ['OOOOOOOO'],
  ['O      O'],
  ['O      O'],
  ['O      O'],
  ['O      O'],
  ['OOOOOOOO'],
]);
console.log(getFrame(2, 2, 'T'), 'invalid');
console.log(getFrame(4, 10, 'J'), [
  ['JJJJ'],
  ['J  J'],
  ['J  J'],
  ['J  J'],
  ['J  J'],
  ['J  J'],
  ['J  J'],
  ['J  J'],
  ['J  J'],
  ['JJJJ'],
]);
console.log(getFrame(7, 2, '4'), 'invalid');
console.log(getFrame(7, 4, '~'), [
  ['~~~~~~~'],
  ['~     ~'],
  ['~     ~'],
  ['~~~~~~~'],
]);
console.log(getFrame(8, 3, '='), [['========'], ['=      ='], ['========']]);
console.log(getFrame(3, 8, '<'), [
  ['<<<'],
  ['< <'],
  ['< <'],
  ['< <'],
  ['< <'],
  ['< <'],
  ['< <'],
  ['<<<'],
]);
console.log(getFrame(7, 1, '4'), 'invalid');
console.log(getFrame(7, 3, 'o'), [['ooooooo'], ['o     o'], ['ooooooo']]);
console.log(getFrame(8, 2, 'p'), 'invalid');
console.log(getFrame(10, 9, '&'), [
  ['&&&&&&&&&&'],
  ['&        &'],
  ['&        &'],
  ['&        &'],
  ['&        &'],
  ['&        &'],
  ['&        &'],
  ['&        &'],
  ['&&&&&&&&&&'],
]);
console.log(getFrame(8, 6, '-'), [
  ['--------'],
  ['-      -'],
  ['-      -'],
  ['-      -'],
  ['-      -'],
  ['--------'],
]);
console.log(getFrame(5, 1, 'n'), 'invalid');
console.log(getFrame(1, 6, 'r'), 'invalid');

// made by @Joshua Señoron
