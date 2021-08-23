const ageDifference = (fAge, sAge) => {
  const twice = sAge * 2;
  return fAge > twice ? fAge - twice : twice - fAge;
};

// Tests

console.log(ageDifference(36, 7), 22);
console.log(ageDifference(55, 30), 5);
console.log(ageDifference(42, 21), 0);
console.log(ageDifference(22, 1), 20);
console.log(ageDifference(29, 0), 29);
