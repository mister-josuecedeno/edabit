const countRepetitions = (arr) => {
  const count = {};
  const sortable = [];
  const result = {};

  // Count occurrences
  arr.forEach((el) => {
    count[el] = count[el] + 1 || 1;
  });

  // Add to sortable array
  for (el in count) {
    sortable.push([el, count[el]]);
  }

  sortable.sort((a, b) => b[1] - a[1]);

  // Add sorted to result
  sortable.forEach((el) => {
    return (result[el[0]] = el[1]);
  });

  return result;
};

// Tests
const tests = [
  [['cat', 'dog', 'cat', 'cow', 'cow', 'cow'], { cow: 3, cat: 2, dog: 1 }],
  [[1, 5, 5, 5, 12, 12, 0, 0, 0, 0, 0, 0], { 0: 6, 5: 3, 12: 2, 1: 1 }],
  [
    [Infinity, null, Infinity, '😀', null, null],
    { null: 3, Infinity: 2, '😀': 1 },
  ],
];

tests.forEach(([a, e]) => console.log(countRepetitions(a), e));
