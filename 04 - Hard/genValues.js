// https://edabit.com/challenge/g9z2gkXH5zurRPpSD

const genValues = (n, i) => {
  const result = [];
  const decimalPlaces = i.toString().includes('.')
    ? i.toString().split('.')[1].length
    : 0;

  for (let j = 0; j <= n; j = +(j + i).toFixed(decimalPlaces)) {
    result.push(j);
  }

  return result;
};

// Tests

console.log(
  genValues(10, 0.5),
  [
    0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0,
    7.5, 8.0, 8.5, 9.0, 9.5, 10.0,
  ]
);
console.log(
  genValues(5, 0.25),
  [
    0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25,
    3.5, 3.75, 4.0, 4.25, 4.5, 4.75, 5.0,
  ]
);
console.log(genValues(9, 1.5), [0.0, 1.5, 3.0, 4.5, 6.0, 7.5, 9.0]);
console.log(
  genValues(1, 0.04),
  [
    0.0, 0.04, 0.08, 0.12, 0.16, 0.2, 0.24, 0.28, 0.32, 0.36, 0.4, 0.44, 0.48,
    0.52, 0.56, 0.6, 0.64, 0.68, 0.72, 0.76, 0.8, 0.84, 0.88, 0.92, 0.96, 1.0,
  ]
);
console.log(
  genValues(1, 0.09),
  [0.0, 0.09, 0.18, 0.27, 0.36, 0.45, 0.54, 0.63, 0.72, 0.81, 0.9, 0.99]
);
console.log(genValues(4, 1.5), [0.0, 1.5, 3.0]);
console.log(genValues(20, 2), [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
console.log(genValues(21, 2), [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
