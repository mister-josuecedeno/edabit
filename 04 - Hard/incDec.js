// set-up
// https://edabit.com/challenge/MyTTy4taYEhhSuoFf
const isInc = (n) => {
  return;
};

const isDec = (n) => {
  return;
};

const isIncDec = (n) => {
  const nums = [...`${n}`].map((d) => +d);
  if (n < 10) return true;

  return;
};

const incDec = (n) => {
  const nums = [...Array(Math.pow(10, n)).keys()].map((n, i) => i + 1);
  return nums.filter((n) => isIncDec(n)).length;
};

// Tests
// console.log(incDec(0), 1);
// console.log(incDec(1), 10);
// console.log(incDec(2), 100);
console.log(incDec(3), 475);
//console.log(incDec(4), 1675);
// console.log(incDec(5), 4954);
// console.log(incDec(6), 12952);
