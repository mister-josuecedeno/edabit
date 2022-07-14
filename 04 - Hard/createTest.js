// set-up
const isPrimitive = (value) => value === Object(value);

const buildString = (isPrimitive, isString) => {
  return;
};

const createTest = (a, b) => {
  let result = '';

  if (isPrimitive(a)) {
    result = '';
  }

  return result;
};

// Tests

console.log(createTest('a', 'b'), 'console.log(createTest("a", "b"), "ab")');
console.log(
  createTest('Te', 'st'),
  'console.log(createTest("Te", "st"), "Test")'
);
console.log(createTest('1', '1'), 'console.log(createTest("1", "1"), "11")');
console.log(createTest(1, 1), 'console.log(createTest(1, 1), 2)');
console.log(createTest(99, 1), 'console.log(createTest(99, 1), 100)');
console.log(createTest(0, 0), 'console.log(createTest(0, 0), 0)');
console.log(
  createTest([1], [1]),
  'Test.assertSimilar(createTest([1], [1]), [1, 1])'
);
console.log(
  createTest(['1'], ['1']),
  'Test.assertSimilar(createTest(["1"], ["1"]), ["1", "1"])'
);
console.log(
  createTest(['String'], ['String']),
  'Test.assertSimilar(createTest(["String"], ["String"]), ["String", "String"])'
);
