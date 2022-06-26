const textToNumberBinary = (str) => {
  const numbers = {
    one: 1,
    zero: 0,
  };

  const arr = str
    .split(' ')
    .map((n) => numbers[n.toLowerCase()])
    .join('');

  const diff = arr.length % 8;

  if (arr.length < 8) return '';

  return diff === 0 ? arr : arr.slice(0, -diff);
};

// Tests

console.log(
  textToNumberBinary('one one one one zero zero zero zero'),
  '11110000'
);
console.log(
  textToNumberBinary(
    'one Zero zero one zero zero one one one one one zero oNe one one zero one zerO'
  ),
  '1001001111101110'
);
console.log(textToNumberBinary('one zero one'), '');
console.log(
  textToNumberBinary('one zero zero one zero ten one one one one two'),
  '10010111'
);
console.log(
  textToNumberBinary(
    'One zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero'
  ),
  '1001011101100001011101100001011101100001011101100001011101100001'
);
console.log(textToNumberBinary('TWO one zero one one zero one zero'), '');
console.log(
  textToNumberBinary('TWO one zero one one zero one zero one'),
  '10110101'
);
