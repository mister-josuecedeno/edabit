const lcm = (a, b) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  const isMultiple = (n) => (max * n) % min === 0;

  for (let i = 1; i <= min; i++) {
    if (isMultiple(i)) return max * i;
  }
};

// Tests

console.log(lcm(6, 10), 30);
console.log(lcm(30, 60), 60);
console.log(lcm(10000, 333), 3330000);
console.log(lcm(75, 135), 675);
console.log(lcm(102, 2), 102);
