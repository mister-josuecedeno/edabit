// https://edabit.com/challenge/WBdw7BxLCoYnbmphd

// Not my solution
function getCatalanNumber(n) {
  return Math.round(factoriel(2 * n) / ((n + 1) * factoriel(n) ** 2));
}
function factoriel(n) {
  return n < 2 ? 1 : n * factoriel(n - 1);
}

// Tests

console.log(getCatalanNumber(0), 1);
console.log(getCatalanNumber(3), 5);
console.log(getCatalanNumber(7), 429);
console.log(getCatalanNumber(8), 1430);
console.log(getCatalanNumber(9), 4862);
console.log(getCatalanNumber(1), 1);
console.log(getCatalanNumber(4), 14);
console.log(getCatalanNumber(11), 58786);
console.log(getCatalanNumber(17), 129644790);
