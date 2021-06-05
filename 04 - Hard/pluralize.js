const pluralize = (arr) => {
  const itemMap = {};
  const items = [...new Set(arr)]; // unique items

  // count of each item
  for (let i of arr) {
    itemMap[i] = itemMap[i] + 1 || 1;
  }

  // pluralize based on count
  const result = items.map((i) => (itemMap[i] > 1 ? `${i}s` : i));

  return result;
};

// Tests
let [expected, actual] = [
  [
    ['cows', 'pig'],
    ['tables'],
    ['chair', 'pencil', 'arm'],
    ['list'],
    ['sets', 'tuples', 'strings', 'integer'],
  ],
  [
    ['cow', 'pig', 'cow', 'cow'],
    ['table', 'table', 'table'],
    ['chair', 'pencil', 'arm'],
    ['list'],
    [
      'set',
      'set',
      'tuple',
      'tuple',
      'string',
      'string',
      'string',
      'string',
      'integer',
    ],
  ],
];
for (let i in expected) console.log(pluralize(actual[i]), expected[i]);
