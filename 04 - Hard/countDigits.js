const countDigits = (n, d) => {
  const nums = [...Array(n + 1).keys()]
    .map((n, i) => Math.pow(i, 2))
    .toString();
  const regex = new RegExp(d, 'g');
  return nums.match(regex).length;
};

// Tests

console.log(countDigits(10, 1), 4);
console.log(countDigits(25, 2), 9);
console.log(countDigits(17, 3), 1);
console.log(countDigits(5750, 0), 4700);
console.log(countDigits(11011, 2), 9481);
console.log(countDigits(12224, 8), 7733);
console.log(countDigits(11549, 1), 11905);
console.log(countDigits(14550, 7), 8014);
console.log(countDigits(8304, 7), 3927);
console.log(countDigits(10576, 9), 7860);
console.log(countDigits(12526, 1), 13558);
console.log(countDigits(7856, 4), 7132);
console.log(countDigits(14956, 1), 17267);
// Mubashir
