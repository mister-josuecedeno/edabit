const addParityBit = (str) => {
  const charMap = {};

  [...str].forEach((chr) => (charMap[chr] = charMap[chr] + 1 || 1));

  return `${str}${charMap[1] % 2 === 0 ? '0' : '1'}`;
};

// Tests

let [actualParam, expectedParam] = [
  [
    '0010110',
    '1100000',
    '1111111',
    '1111011',
    '1010110',
    '1100110',
    '1010110',
    '1011011',
    '0010110',
    '1100101',
    '1000000',
    '1010111',
  ],
  [
    '00101101',
    '11000000',
    '11111111',
    '11110110',
    '10101100',
    '11001100',
    '10101100',
    '10110111',
    '00101101',
    '11001010',
    '10000001',
    '10101111',
  ],
];
for (let i in actualParam)
  console.log(addParityBit(actualParam[i]), expectedParam[i]);
