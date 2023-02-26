// https://edabit.com/challenge/ci4pyupzxrJmZydJ5

const isAntiArray = (arr1, arr2) => {
  const arr3 = arr1.concat(arr2);
  if ([...new Set(arr3)].length > 2) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) continue;
    return false;
  }
  return true;
};

// Tests

console.log(isAntiArray(['1', '0', '0', '1'], ['0', '1', '1', '0']), true);
console.log(
  isAntiArray(
    ['apples', 'bananas', 'bananas'],
    ['bananas', 'apples', 'apples']
  ),
  true
);
console.log(isAntiArray([3.14, true, 3.14], [3.14, false, 3.14]), false);
console.log(isAntiArray([6.28, true, 6.28], [true, false, true]), false);
console.log(isAntiArray(['int', 'str'], ['str', 'int']), true);
console.log(isAntiArray([3.14, true, 3.14], [3.14, true, 3.14]), false);
console.log(
  isAntiArray(
    [121, 'float', 'float', 'float', 121, 'float'],
    ['float', 121, 121, 121, 'float', 121]
  ),
  true
);
