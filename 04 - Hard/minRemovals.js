// https://edabit.com/challenge/MAAWsTiLs6s4xbLLW

const minRemovals = (str1, str2) => {
  const arr1 = [...str1];
  const arr2 = [...str2];

  const diff1 = arr1.filter((l) => arr2.indexOf(l) === -1);
  const diff2 = arr2.filter((l) => arr1.indexOf(l) === -1);

  return diff1.length + diff2.length;
};

// Tests

console.log(minRemovals('abcde', 'cab'), 2);
console.log(minRemovals('deafk', 'kfeap'), 2);
console.log(minRemovals('abc', 'ghi'), 6);
console.log(minRemovals('abcxyz', 'ghixytz'), 7);
