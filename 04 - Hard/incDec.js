// set-up
// https://edabit.com/challenge/MyTTy4taYEhhSuoFf
// re-think this one - may be going down the wrng road
const isIncDec = (n) => {
  const num = [...`${n}`];
  //if (n < 10) return true;

  let result = 0;
  for (let i = 1; i < num.length; i++) {
    if (num[i] >= num[i - 1]) result++;
  }

  return result;
};

const incDec = (n) => {
  const nums = [...Array(Math.pow(10, n)).keys()].map((n, i) => i + 1);
  return nums.filter((n) => isIncDec(n)).length;
};

// Tests

console.log(incDec(0), 1);
console.log(incDec(1), 10);
console.log(incDec(2), 100);
console.log(incDec(3), 475);
console.log(incDec(4), 1675);
console.log(incDec(5), 4954);
console.log(incDec(6), 12952);
