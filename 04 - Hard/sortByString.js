// https://edabit.com/challenge/ScrNCxkxyWEBAvfck

// refactor
const sortByString = (arr, str) => {
  return arr.sort((a, b) => {
    return str.indexOf(a[0] - str.indexOf(b[0]));
  });
};

// Tests

console.log(sortByString(['apple', 'banana', 'cherry', 'date'], 'dbca'), [
  'date',
  'banana',
  'cherry',
  'apple',
]);

console.log(sortByString(['small', 'big', 'medium'], 'sazymtb'), [
  'small',
  'medium',
  'big',
]);

console.log(sortByString(['poof', 'floof', 'loop'], 'flatp'), [
  'floof',
  'loop',
  'poof',
]);

console.log(sortByString(['yellow', 'phone', 'book'], 'abcdpy'), [
  'book',
  'phone',
  'yellow',
]);
