const millionInMonth = (firstMonth, multiplier) => {
  let totalSavings = firstMonth;
  let paycheck = firstMonth;
  let months = 1;

  while (totalSavings < 1000000) {
    paycheck = paycheck * multiplier;
    totalSavings += paycheck;
    months++;
  }

  return months;
};

// Tests

console.log(millionInMonth(10, 2), 17);
console.log(millionInMonth(5, 2), 18);
console.log(millionInMonth(2, 5), 10);
console.log(millionInMonth(20, 4), 9);
console.log(millionInMonth(50, 100), 4);
console.log(millionInMonth(1, 1.01), 926);
console.log(millionInMonth(15, 2), 17);
console.log(millionInMonth(20, 2), 16);
