const yearsInOneHouse = (age, moves) => {
  return Math.round(age / (moves + 1));
};

// Tests

console.log(yearsInOneHouse(30, 1), 15);
console.log(yearsInOneHouse(15, 2), 5);
console.log(yearsInOneHouse(80, 0), 80);
console.log(yearsInOneHouse(23, 2), 8);
console.log(yearsInOneHouse(31, 2), 10);
console.log(yearsInOneHouse(1, 0), 1);
