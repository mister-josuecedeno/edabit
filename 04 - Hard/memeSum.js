// https://edabit.com/challenge/FxFcBDTGuBCTXgZhu

const memeSum = (a, b) => {
  const arrA = [...`${a}`];
  const arrB = [...`${b}`];
  const result = [];
  const length = Math.max(arrA.length, arrB.length);

  for (let i = 0; i < length; i++) {
    let lastA = arrA.pop() || 0;
    let lastB = arrB.pop() || 0;
    result.unshift(+lastA + +lastB);
  }

  return +result.join('');
};

// Tests

console.log(memeSum(2, 11), 13);
console.log(memeSum(0, 1), 1);
console.log(memeSum(0, 0), 0);
console.log(memeSum(16, 18), 214);
console.log(memeSum(26, 39), 515);
console.log(memeSum(122, 81), 1103);
console.log(memeSum(1222, 30277), 31499);
console.log(memeSum(38810, 1383), 391193);
console.log(memeSum(1236, 30977), 31111013);
console.log(memeSum(49999, 49999), 818181818);
