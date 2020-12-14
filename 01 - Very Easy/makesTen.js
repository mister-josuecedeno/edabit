// Solution
const makesTen = (n1, n2) => {
  const isTen = n1 === 10 || n2 === 10;
  const totalsTen = n1 + n2 === 10;
  return isTen || totalsTen;
};

// Tests
console.log(makesTen(9, 10), true);
console.log(makesTen(9, 9), false);
console.log(makesTen(1, 9), true);
console.log(makesTen(10, 1), true);
console.log(makesTen(10, 10), true);
console.log(makesTen(8, 2), true);
console.log(makesTen(8, 3), false);
console.log(makesTen(10, 42), true);
console.log(makesTen(12, -2), true);
