const findSingleNumber = (nums) => {
  const numMap = {};

  for (let n of nums) {
    numMap[n] = numMap[n] + 1 || 1;
  }

  for (let ct in numMap) {
    if (numMap[ct] === 1) return +ct;
  }

  return null;
};

// Tests
console.log(findSingleNumber([2, 2, 2, 3, 4, 4, 4]), 3);
console.log(findSingleNumber([415]), 415);
console.log(findSingleNumber([]), null);
console.log(
  findSingleNumber([
    7,
    13,
    3,
    6,
    5,
    4,
    4,
    13,
    5,
    3,
    6,
    7,
    6,
    5,
    3,
    13,
    4,
    7,
    13,
    5,
    7,
    4,
    3,
    6,
    8,
    4,
    3,
    7,
    5,
    6,
    13,
  ]),
  8
);
console.log(
  findSingleNumber([
    1,
    2,
    3,
    6,
    5,
    4,
    4,
    2,
    5,
    3,
    6,
    1,
    6,
    5,
    3,
    2,
    4,
    1,
    2,
    5,
    1,
    4,
    3,
    6,
    101,
    4,
    3,
    1,
    5,
    6,
    2,
  ]),
  101
);
console.log(findSingleNumber([1, 2, 2, 3, 3]), 1);
console.log(
  typeof findSingleNumber([243, 70, 18, 60, 284, 148, 418, 360, 727, 791, 325]),
  'number'
);
console.log(
  findSingleNumber([
    364,
    938,
    123,
    686,
    111,
    227,
    802,
    667,
    35,
    858,
    364,
    938,
    123,
    686,
    111,
    227,
    802,
    667,
    35,
    858,
    364,
    938,
    123,
    686,
    111,
    227,
    802,
    667,
    35,
    858,
    364,
    938,
    123,
    686,
    111,
    227,
    802,
    667,
    35,
    858,
    364,
    938,
    123,
    686,
    111,
    227,
    802,
    667,
    35,
    858,
    497,
  ]),
  497
);
console.log(
  findSingleNumber([
    116,
    621,
    698,
    894,
    96,
    630,
    291,
    327,
    911,
    350,
    116,
    621,
    698,
    894,
    96,
    630,
    291,
    327,
    911,
    350,
    521,
  ]),
  521
);
