const numberLength = (num) => {
  let count = 0;
  if (num < 10) return 1;
  if (num === 10) return 2;

  while (num > 1) {
    num = num / 10;
    count++;
  }

  return count;
};

// Tests

console.log(numberLength(10), 2);
console.log(numberLength(5000), 4);
console.log(numberLength(0), 1);
console.log(numberLength(4039182), 7);
console.log(numberLength(9999999999999999), 16);
console.log(numberLength(1), 1);
console.log(numberLength(777777777777777777777777777777), 30);
