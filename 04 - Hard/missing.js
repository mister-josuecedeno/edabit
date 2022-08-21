// https://edabit.com/challenge/yQGTggivy7eadXwBN
// set-up

const missing = (arr1, arr2) => arr1.filter((e) => !arr2.includes(e))[0];

// Tests

console.log(missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8]), 2);
console.log(
  missing(['Jane', 'is', 'pretty', 'ugly'], ['Jane', 'is', 'pretty']),
  'ugly'
);
console.log(
  missing([true, true, false, false, true], [false, true, false, true]),
  true
);
