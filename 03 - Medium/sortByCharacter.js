const sortByCharacter = (arr, n) => {
  const i = n - 1;
  return arr.sort((a, b) => a.charCodeAt(i) - b.charCodeAt(i));
};

// Tests

console.log(sortByCharacter(['az16', 'by35', 'cx24'], 1), [
  'az16',
  'by35',
  'cx24',
]);
console.log(sortByCharacter(['az16', 'by35', 'cx24'], 2), [
  'cx24',
  'by35',
  'az16',
]);
console.log(sortByCharacter(['az16', 'by35', 'cx24'], 3), [
  'az16',
  'cx24',
  'by35',
]);
console.log(sortByCharacter(['az16', 'by35', 'cx24'], 4), [
  'cx24',
  'by35',
  'az16',
]);
console.log(sortByCharacter(['apple', 'mayor', 'bendy', 'petal'], 5), [
  'apple',
  'petal',
  'mayor',
  'bendy',
]);
console.log(sortByCharacter(['team', 'mate', 'bade'], 3), [
  'team',
  'bade',
  'mate',
]);
