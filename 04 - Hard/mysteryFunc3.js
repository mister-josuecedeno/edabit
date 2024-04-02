// https://edabit.com/challenge/YxtBN5uCTSCqoZofd

const mysteryFunc = (num) => {
  let isGreaterThanNum = false;
  let pow = 1;
  let product;

  while (!isGreaterThanNum) {
    product = Math.pow(2, pow);
    if (product > num) {
      product = Math.pow(2, pow - 1);
      break;
    }
    pow++;
  }

  return +['2'.repeat(pow - 1), `${num - product}`].join('');
};

// Tests

console.log(mysteryFunc(3), 21);
console.log(mysteryFunc(9), 2221);
console.log(mysteryFunc(15), 2227);
console.log(mysteryFunc(17), 22221);
console.log(mysteryFunc(19), 22223);
console.log(mysteryFunc(24), 22228);
console.log(mysteryFunc(35), 222223);
