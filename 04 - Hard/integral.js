// Not my solution - instructions were not clear

const integral = (b, ...bounds) =>
  bounds
    .reverse()
    .map((n) => n ** (b + 1))
    .reduce((a, e) => a - e);

// Tests

console.log(integral(0, 2, 5), 3);
console.log(integral(2, 4, 7), 279);
console.log(integral(5, 9, 3), -530712);
console.log(integral(10, 2, -4), -4196352);
console.log(integral(7, 2, 2), 0);
