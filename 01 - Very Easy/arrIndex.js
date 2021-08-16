const arrIndex = (arr, idx) => {
  const flat = arr.flat(Infinity);
  let str = '';

  idx.forEach((i) => {
    str += flat[i - 1];
  });

  return str;
};

// Tests
results1 = arrIndex(
  [
    ['m', 'u', 'b'],
    ['a', 's', 'h'],
    ['i', 'r', '1'],
  ],
  [1, 3, 5, 8]
);
console.log(results1, 'mbsr');
results1 = arrIndex(
  [
    ['m', 'y', 'e'],
    ['x', 'a', 'm'],
    ['p', 'l', 'e'],
  ],
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
);
console.log(results1, 'myexample');
results2 = arrIndex(
  [
    ['m', 'y', 'e'],
    ['x', 'a', 'm'],
    ['p', 'l', 'e'],
  ],
  [1, 5, 6]
);
console.log(results2, 'mam');
results3 = arrIndex(
  [
    ['m', 'y', 'e'],
    ['x', 'a', 'm'],
    ['p', 'l', 'e'],
  ],
  [1, 3, 7, 8]
);
console.log(results3, 'mepl');
