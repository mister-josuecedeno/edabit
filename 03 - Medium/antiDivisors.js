// In progress
const antiDivisors = (n) => {
  let checked = [...Array(Math.abs(n)).keys()].filter((d) => {
    return (
      d > 1 &&
      d < n &&
      d % n !== 0 &&
      d % 2 !== 0 &&
      (d % (n * 2 - 1) === 0 || d % (n * 2 + 1) === 0)
    );
  });
  return checked;
};

// Tests

console.log(antiDivisors(10), [3, 4, 7], 'Example #1');
console.log(antiDivisors(12), [5, 8], 'Example #2');
console.log(antiDivisors(20), [3, 8, 13], 'Example #3');
console.log(antiDivisors(1), []);
console.log(antiDivisors(31), [2, 3, 7, 9, 21]);
console.log(antiDivisors(55), [2, 3, 10, 22, 37]);
console.log(antiDivisors(0), []);
console.log(antiDivisors(105), [2, 6, 10, 11, 14, 19, 30, 42, 70]);
console.log(antiDivisors(666), [4, 11, 12, 31, 36, 43, 121, 148, 444]);
console.log(
  antiDivisors(9999),
  [2, 6, 7, 18, 22, 66, 198, 202, 606, 1818, 2222, 2857, 6666]
);
console.log(antiDivisors(-33), []);
