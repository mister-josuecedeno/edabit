const uniqueInOrder = (seq) => {
  return [...seq].filter((el, index, arr) => el !== arr[index + 1]);
};

// Tests
console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B']);
console.log(uniqueInOrder('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D']);
console.log(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3]);
console.log(uniqueInOrder('12333355555522211133'), [
  '1',
  '2',
  '3',
  '5',
  '2',
  '1',
  '3',
]);
console.log(uniqueInOrder('uuUfffFgGggYtt76%5$$$'), [
  'u',
  'U',
  'f',
  'F',
  'g',
  'G',
  'g',
  'Y',
  't',
  '7',
  '6',
  '%',
  '5',
  '$',
]);
console.log(uniqueInOrder(['1', '2', '2', '3', '3']), ['1', '2', '3']);
console.log(uniqueInOrder([3, 7, 3, 8, 4]), [3, 7, 3, 8, 4]);
console.log(uniqueInOrder('ABC'), ['A', 'B', 'C']);
console.log(uniqueInOrder('$$$%%%$$$%%%'), ['$', '%', '$', '%']);
console.log(uniqueInOrder([1, 1, 1, 'A', 'B', 'B']), [1, 'A', 'B']);
