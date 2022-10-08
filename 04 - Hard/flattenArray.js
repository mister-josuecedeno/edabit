const flattenArray = (array = null) => {
  const flat = array === null ? [] : array.flat(Infinity);
  return flat.map((a) => (typeof a === 'function' ? a() : a));
};

// Tests

console.log(
  flattenArray([
    1,
    '2',
    [
      3,
      [4],
      function () {
        return 'five';
      },
    ],
  ]),
  [1, '2', 3, 4, 'five']
);
console.log(flattenArray([1]), [1]);
console.log(flattenArray(), []);
console.log(flattenArray([]), []);
console.log(
  flattenArray([
    [
      1,
      '2',
      [
        3,
        function () {
          return 4;
        },
        ['five'],
        'six',
        true,
        { prop: 'val' },
      ],
    ],
  ]),
  [1, '2', 3, 4, 'five', 'six', true, { prop: 'val' }]
);
