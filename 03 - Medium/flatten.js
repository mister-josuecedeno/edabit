const flatten = (arr) => {
  const flat = [];

  arr.forEach((el) => {
    if (Array.isArray(el)) {
      flat.push(...flatten(el));
    } else {
      flat.push(el);
    }
  });

  return flat;
};

// Tests

console.log(flatten([[17.2, 5, 'edabit']]), [17.2, 5, 'edabit']);
console.log(flatten([[[[[2, 14, 'rubber']]], 2, 3, 4]]), [
  2,
  14,
  'rubber',
  2,
  3,
  4,
]);
console.log(flatten([0, [12, 'biratnagar', [[2]]]]), [0, 12, 'biratnagar', 2]);
console.log(flatten([['balkot']]), ['balkot']);
console.log(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
