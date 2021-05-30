const simpleCheck = (a, b) => {
  let smaller = Math.min(a, b);
  let greater = Math.max(a, b);
  let count = 0;

  while (smaller > 0) {
    if (Number.isInteger(greater / smaller)) count++;
    console.log(count);
    console.log(greater / smaller);
    greater--;
    smaller--;
  }

  return count;
};

// Tests
console.log(simpleCheck(3, 5), 2, 'For numbers 3 and 5 the result should be 2');
console.log(
  simpleCheck(10, 1),
  1,
  'For numbers 10 and 1 the result should be 1'
);
console.log(simpleCheck(7, 7), 7, 'For numbers 7 and 7 the result should be 7');
console.log(
  simpleCheck(16, 32),
  5,
  'For numbers 16 and 32 the result should be 5'
);
console.log(
  simpleCheck(42, 21),
  4,
  'For numbers 42 and 21 the result should be 4'
);
console.log(
  simpleCheck(54, 17),
  1,
  'For numbers 54 and 17 the result should be 1'
);
console.log(
  simpleCheck(150080, 150032),
  10,
  'For numbers 150080 and 150032 the result should be 10'
);
