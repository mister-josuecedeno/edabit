// Not my solution
const createTest = (a, b) => {
  c = JSON.stringify(a);
  d = JSON.stringify(b);
  if (Array.isArray(a))
    return `Test.assertSimilar(createTest(${c}, ${d}), [${JSON.stringify(
      ...a
    )}, ${JSON.stringify(...b)}])`;
  return `Test.assertEquals(createTest(${c}, ${d}), ${JSON.stringify(a + b)})`;
};

// Tests

console.log(
  createTest('a', 'b'),
  'Test.assertEquals(createTest("a", "b"), "ab")'
);
console.log(
  createTest('Te', 'st'),
  'Test.assertEquals(createTest("Te", "st"), "Test")'
);
console.log(
  createTest('1', '1'),
  'Test.assertEquals(createTest("1", "1"), "11")'
);
console.log(createTest(1, 1), 'Test.assertEquals(createTest(1, 1), 2)');
console.log(createTest(99, 1), 'Test.assertEquals(createTest(99, 1), 100)');
console.log(createTest(0, 0), 'Test.assertEquals(createTest(0, 0), 0)');
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
