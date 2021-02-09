const letterCounter = (arr, a) => {
  const charMap = {};

  for (let char of arr.flat(1)) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap[a];
};

// Tests
console.log(
  letterCounter(
    [
      ['D', 'E', 'Y', 'H', 'A', 'D'],
      ['C', 'B', 'Z', 'Y', 'J', 'K'],
      ['D', 'B', 'C', 'A', 'M', 'N'],
      ['F', 'G', 'G', 'R', 'S', 'R'],
      ['V', 'X', 'H', 'A', 'S', 'S'],
    ],
    'D'
  ),
  3
);

console.log(
  letterCounter(
    [
      ['D', 'E', 'Y', 'H', 'A', 'D'],
      ['C', 'B', 'Z', 'Y', 'J', 'K'],
      ['D', 'B', 'C', 'A', 'M', 'N'],
      ['F', 'G', 'G', 'R', 'S', 'R'],
      ['V', 'X', 'H', 'A', 'S', 'S'],
    ],
    'H'
  ),
  2
);

console.log(
  letterCounter(
    [
      ['D', 'E', 'Y', 'H', 'A', 'D'],
      ['C', 'B', 'Z', 'Y', 'J', 'K'],
      ['D', 'B', 'C', 'A', 'M', 'N'],
      ['F', 'G', 'G', 'R', 'S', 'R'],
      ['V', 'X', 'H', 'A', 'S', 'S'],
    ],
    'Z'
  ),
  1
);

console.log(
  letterCounter(
    [
      ['D', 'E', 'Y', 'H', 'A', 'D'],
      ['C', 'B', 'Z', 'Y', 'J', 'K'],
      ['D', 'B', 'C', 'A', 'M', 'N'],
      ['F', 'G', 'G', 'R', 'S', 'R'],
      ['V', 'X', 'H', 'A', 'S', 'S'],
    ],
    'R'
  ),
  2
);

console.log(
  letterCounter(
    [
      ['D', 'E', 'Y', 'H', 'A', 'D'],
      ['C', 'B', 'Z', 'Y', 'J', 'K'],
      ['D', 'B', 'C', 'A', 'M', 'N'],
      ['F', 'G', 'G', 'R', 'S', 'R'],
      ['V', 'X', 'H', 'A', 'S', 'S'],
    ],
    'X'
  ),
  1
);

console.log(
  letterCounter(
    [
      ['D', 'E', 'Y', 'H', 'A', 'D'],
      ['C', 'B', 'Z', 'Y', 'J', 'K'],
      ['D', 'B', 'C', 'A', 'M', 'N'],
      ['F', 'G', 'G', 'R', 'S', 'R'],
      ['V', 'X', 'H', 'A', 'S', 'S'],
    ],
    'S'
  ),
  3
);
