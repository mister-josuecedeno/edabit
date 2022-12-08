// https://edabit.com/challenge/sRuLYeBet7XE2wpRL

const deleteOccurrences = (arr, num) => {
  const elementCt = {};
  const newArr = [];

  for (const e of arr) {
    elementCt[e] = elementCt[e] + 1 || 1;

    if (elementCt[e] <= num) {
      newArr.push(e);
    }
  }

  return newArr;
};

// Tests

console.log(deleteOccurrences([1, 1, 1, 1], 2), [1, 1]);
console.log(deleteOccurrences([true, true, true], 3), [true, true, true]);
console.log(deleteOccurrences([13, true, 13, null], 1), [13, true, null]);
console.log(deleteOccurrences([], 100), []);
console.log(deleteOccurrences(['John', 'John', 'Marry', 'Marry'], 1), [
  'John',
  'Marry',
]);
console.log(
  deleteOccurrences(
    [
      'Marry',
      'John',
      null,
      'John',
      false,
      'John',
      0,
      'John',
      'Marry',
      'Marry',
      'John',
    ],
    3
  ),
  ['Marry', 'John', null, 'John', false, 'John', 0, 'Marry', 'Marry']
);
console.log(deleteOccurrences([20, 37, 20, 21], 1), [20, 37, 21]);
console.log(
  deleteOccurrences([1, 1, 3, 3, 7, 2, 2, 2, 2], 3),
  [1, 1, 3, 3, 7, 2, 2, 2]
);
console.log(
  deleteOccurrences([1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1], 3),
  [1, 2, 3, 1, 1, 2, 2, 3, 3, 4, 5]
);
