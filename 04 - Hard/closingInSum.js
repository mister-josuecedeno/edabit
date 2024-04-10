// https://edabit.com/challenge/vrHDieytY657gYTcT

const closingInSum = (num) => {
  if (num === null || num === undefined || num === 0 || num === '') return 0;
  let numbers = [...`${num}`];
  let first, last, sum;
  if (numbers.length > 1) {
    first = numbers.shift();
    last = numbers.pop();
    sum = +(first + last);
  } else {
    sum = +numbers.shift();
  }

  num = numbers.join('');
  return sum + closingInSum(num);
};

// Tests

console.log(closingInSum(10710356439481), 205);
console.log(closingInSum(403672023435605), 248);
console.log(closingInSum(121), 13);
console.log(closingInSum(1039), 22);
console.log(closingInSum(22225555), 100);
console.log(closingInSum(2520), 72);
console.log(closingInSum(5332824166496569), 331);
console.log(closingInSum(72314137318116), 237);
console.log(closingInSum(44013947776), 160);
