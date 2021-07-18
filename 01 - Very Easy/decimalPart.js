const decimalPart = (n) => {
  if (Number.isInteger(n)) return 0;
  return +('0.' + `${n}`.split('.')[1]);
};

// Tests
console.log(decimalPart(1.2), 0.2);
console.log(decimalPart(-3.73), 0.73);
console.log(decimalPart(10), 0);
