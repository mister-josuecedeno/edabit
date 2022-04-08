const impedanceCalculator = (Dd, Dc, er) => {
  return parseFloat(((138 / er ** 0.5) * Math.log10(Dd / Dc)).toFixed(1));
};

// Tests

console.log(impedanceCalculator(5.3, 1.2, 2.2), 60.0);
console.log(impedanceCalculator(4.58, 1.33, 2.2), 50.0);
console.log(impedanceCalculator(20.7, 2, 4), 70.0);
console.log(impedanceCalculator(40, 2.05, 2.2), 120.0);
console.log(impedanceCalculator(25.6, 4, 2.2), 75.0);
