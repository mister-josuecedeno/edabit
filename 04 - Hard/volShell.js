// https://edabit.com/challenge/oBtknCwKqmRQtFvPf

const volShell = (r1, r2) => {
  const vol = (4 / 3) * Math.PI * (Math.pow(r2, 3) - Math.pow(r1, 3));
  return +Math.abs(vol).toFixed(3);
};

// Tests

console.log(volShell(17, 36), 174852.67);
console.log(volShell(3, 4), 154.985);
console.log(volShell(1, 90), 3053623.87);
console.log(volShell(12.5, 19), 20549.681);
console.log(volShell(3, 800), 2144660471.753);
console.log(volShell(16.128, 16.256), 421.719);
console.log(volShell(3, 3), 0);
console.log(volShell(4, 3), 154.985);
console.log(volShell(36, 17), 174852.67);
console.log(volShell(18, 96), 3681544.466);
console.log(volShell(1, 7), 1432.566);
console.log(volShell(7, 2), 1403.245);
console.log(volShell(100, 50), 3665191.429);
console.log(volShell(40, 36), 72650.377);
