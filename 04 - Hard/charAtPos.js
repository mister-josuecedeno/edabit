// https://edabit.com/challenge/fWkrdJb6EJrHsP7Sm

const getChars = (r, s) => {
  const arr = [...r];

  if (s === 'even') {
    return arr.filter((_, i) => (i + 1) % 2 === 0);
  } else if (s === 'odd') {
    return arr.filter((_, i) => (i + 1) % 2 !== 0);
  }

  return [];
};

const charAtPos = (r, s) => {
  const chars = getChars(r, s);
  return typeof r === 'string' ? chars.join('') : chars;
};

// Tests

console.log(charAtPos([2, 4, 6, 8, 10], 'even'), [4, 8]);
console.log(charAtPos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'odd'), [1, 3, 5, 7, 9]);
console.log(charAtPos('EDABIT', 'even'), 'DBT');
console.log(charAtPos('EDABIT', 'odd'), 'EAI');
console.log(charAtPos('QWERTYUIOP', 'even'), 'WRYIP');
console.log(charAtPos('POIUYTREWQ', 'odd'), 'PIYRW');
console.log(charAtPos('ASDFGHJKLZ', 'odd'), 'ADGJL');
console.log(charAtPos('ASDFGHJKLZ', 'even'), 'SFHKZ');
console.log(
  charAtPos(['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'], 'odd'),
  ['!', '#', '%', '&', '(']
);
console.log(
  charAtPos([')', '(', '*', '&', '^', '%', '$', '#', '@', '!'], 'odd'),
  [')', '*', '^', '$', '@']
);
console.log(
  charAtPos(['A', 'R', 'B', 'I', 'T', 'R', 'A', 'R', 'I', 'L', 'Y'], 'odd'),
  ['A', 'B', 'T', 'A', 'I', 'Y']
);
