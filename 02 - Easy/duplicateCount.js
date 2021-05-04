const duplicateCount = (str) => {
  const charMap = {};
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    charMap[str[i]] = charMap[str[i]] + 1 || 1;
  }

  for (let el of Object.values(charMap)) {
    if (el > 1) {
      count++;
    }
  }

  return count;
};

// Tests

console.log(duplicateCount('abcde'), 0);
console.log(
  duplicateCount('Aa'),
  0,
  'Duplicate characters are case sensitive.'
);
console.log(duplicateCount('aabbcde'), 2);
console.log(duplicateCount('aabbcdeB'), 2);
console.log(duplicateCount('indivisibility'), 1);
console.log(duplicateCount('Indivisibilities'), 2);
console.log(duplicateCount('aa1112'), 2);
console.log(duplicateCount('bb2c'), 1);
