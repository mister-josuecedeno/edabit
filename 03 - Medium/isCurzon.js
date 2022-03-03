// Set-up
const isCurzon = (num) => {
  const pow = 2 ** num + 1;
  const mult = 2 * num + 1;
  return pow % mult === 0;
};

// Tests

console.log(isCurzon(5), true);
console.log(isCurzon(10), false);
console.log(isCurzon(14), true);
console.log(isCurzon(86), true);
console.log(isCurzon(90), true);
console.log(isCurzon(115), false);
console.log(isCurzon(120), false);
console.log(isCurzon(194), true);
console.log(isCurzon(293), true);
