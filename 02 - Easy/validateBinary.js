const validateBinary = (str) => {
  const digMap = {};
  let isEven;

  const lastDigit = str.slice(-1);

  for (let chr of str.slice(0, -1)) {
    digMap[chr] = digMap[chr] + 1 || 1;
  }

  isEven = digMap['1'] % 2 === 0;

  return (lastDigit === '1' && !isEven) || (lastDigit === '0' && isEven);
};

let [actualParam, expectedParam] = [
  [
    '00101101',
    '11000000',
    '11000001',
    '10010010',
    '10101101',
    '11000100',
    '11000101',
    '10010110',
    '10101101',
    '11001000',
    '11001001',
    '10011010',
  ],
  [
    true,
    true,
    false,
    false,
    false,
    false,
    true,
    true,
    false,
    false,
    true,
    true,
  ],
];
for (let i in actualParam)
  console.log(validateBinary(actualParam[i]), expectedParam[i]);
