// https://edabit.com/challenge/yQGTggivy7eadXwBN

const missing = (arr1, arr2) => {
  const elements = [...arr1, ...arr2];
  const elementMap = new Map();

  for (const element of elements) {
    let value = elementMap.get(element) + 1 || 1;
    elementMap.set(element, value);
  }

  return Array.from(elementMap).filter((e) => e[1] % 2 !== 0)[0][0];
};

// Tests

console.log(missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8]), 2);
console.log(
  missing(['Jane', 'is', 'pretty', 'ugly'], ['Jane', 'is', 'pretty']),
  'ugly'
);
console.log(
  missing([true, true, false, false, true], [false, true, false, true]),
  true
);
