const parallelResistance = (arr) => {
  let rTotal = arr.reduce((acc, cv) => acc + 1 / cv, 0);
  return +(1 / rTotal).toFixed(1);
};

// Tests
console.log(parallelResistance([6, 3]), 2);
console.log(parallelResistance([6, 3, 6]), 1.5);
console.log(parallelResistance([10, 10]), 5);
console.log(parallelResistance([10, 20, 10]), 4);
console.log(parallelResistance([60, 30, 20]), 10);
console.log(parallelResistance([16, 4]), 3.2);
console.log(parallelResistance([20, 5]), 4);
console.log(parallelResistance([500, 500, 500]), 166.7);
console.log(parallelResistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 0.3);
