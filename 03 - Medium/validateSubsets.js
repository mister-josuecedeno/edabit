const validateSubsets = (subsets, set) => {
  return subsets.flat().filter((n) => !set.includes(n)).length === 0;
};

// Tests

console.log(
  validateSubsets(
    [
      [1, 2],
      [2, 3],
      [1, 3],
    ],
    [1, 2, 3]
  ),
  true
);
console.log(validateSubsets([[1, 2, 3], [2], [3], []], [1, 2, 3]), true);
console.log(
  validateSubsets(
    [
      [1, 2],
      [2, 3],
      [1, 4],
    ],
    [1, 2, 3]
  ),
  false
);
console.log(validateSubsets([[1, 2, 3, 4]], [1, 2, 3]), false);
console.log(
  validateSubsets(
    [
      ['a', 'b'],
      ['b', 'c'],
      ['a', 'c'],
    ],
    ['a', 'b', 'c']
  ),
  true
);
console.log(
  validateSubsets([['a', 'b', 'c'], ['b'], ['c'], []], ['a', 'b', 'c']),
  true
);
console.log(
  validateSubsets(
    [
      ['a', 'b'],
      ['b', 'c'],
      ['a', 'd'],
    ],
    ['a', 'b', 'c']
  ),
  false
);
console.log(validateSubsets([['a', 'b', 'c', 'd']], ['a', 'b', 'c']), false);
console.log(validateSubsets([[true, false], [true]], [true, false]), true);
console.log(validateSubsets([[true], [false], []], [true, false]), true);
console.log(validateSubsets([[true], [true, false]], [true]), false);
console.log(validateSubsets([[false]], [true]), false);
