const fibSeq = (end) => {
  if (end === 0) return [];
  if (end === undefined) return undefined;
  const result = [];
  let lastTwoSum = 0;

  while (result.length < end) {
    if (result.length === 0) {
      result.push(0);
      continue;
    }

    if (result.length === 1) {
      result.push(1);
      continue;
    }

    if (result.length > 1) {
      lastTwoSum = result.slice(-2).reduce((acc, cv) => acc + cv, 0);
      result.push(lastTwoSum);
    }
  }

  return result;
};

// Tests

console.log(fibSeq(2), [0, 1]);
console.log(fibSeq(4), [0, 1, 1, 2]);
console.log(fibSeq(0), []);
console.log(fibSeq(7), [0, 1, 1, 2, 3, 5, 8]);
console.log(fibSeq(), undefined, 'An empty input has to return undefined');
console.log(
  fibSeq(20),
  [
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
    2584, 4181,
  ]
);
console.log(fibSeq(1), [0]);
