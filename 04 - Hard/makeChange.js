// https://edabit.com/challenge/8LYGTfbjXRag47yAT

const makeChange = (c) => {
  const change = {
    q: 0,
    d: 0,
    n: 0,
    p: 0,
  };

  change.q = Math.floor(c / 25);
  c -= change.q * 25;

  change.d = Math.floor(c / 10);
  c -= change.d * 10;

  change.n = Math.floor(c / 5);
  c -= change.n * 5;

  change.p = Math.floor(c / 1);
  c -= change.p * 1;

  return c, change;
};

// Tests

console.log(makeChange(47), { q: 1, d: 2, n: 0, p: 2 });
console.log(makeChange(24), { q: 0, d: 2, n: 0, p: 4 });
console.log(makeChange(92), { q: 3, d: 1, n: 1, p: 2 });
console.log(makeChange(99), { q: 3, d: 2, n: 0, p: 4 });
console.log(makeChange(87), { q: 3, d: 1, n: 0, p: 2 });
console.log(makeChange(15), { q: 0, d: 1, n: 1, p: 0 });
console.log(makeChange(25), { q: 1, d: 0, n: 0, p: 0 });
console.log(makeChange(36), { q: 1, d: 1, n: 0, p: 1 });
