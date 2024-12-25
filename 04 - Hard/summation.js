// https://edabit.com/challenge/cMBB43Ps6v4RdDyP4

const summation = (exp, n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += eval(exp.replace(/\bn\b/g, i));
  }
  return Math.round(sum * 10) / 10;
}

// Tests

console.log(summation('n', 10), 55)
console.log(summation('1/n', 50), 4.5)
console.log(summation('n**n', 6), 50069)
console.log(summation('2', 190), 380)
console.log(summation('19', 56), 1064)
console.log(summation('-n', 100), -5050)
console.log(summation('(2*n**2 + 5*n)/3', 30), 7078.3)
console.log(summation('n*(n+1)', 30), 9920)
console.log(summation('0', 3000), 0)