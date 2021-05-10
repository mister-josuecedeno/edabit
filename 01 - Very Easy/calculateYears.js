const calculateYears = (humanYears) => {
  let base = 0;
  let catYears = 0;
  let dogYears = 0;

  if (humanYears > 0) {
    base += 15;
  }

  if (humanYears > 1) {
    base += 9;
  }

  if (humanYears > 2) {
    catYears = (humanYears - 2) * 4;
    dogYears = (humanYears - 2) * 5;
  }

  catYears += base;
  dogYears += base;

  return [humanYears, catYears, dogYears];
};

// Tests
console.log(calculateYears(1), [1, 15, 15]);
console.log(calculateYears(2), [2, 24, 24]);
console.log(calculateYears(10), [10, 56, 64]);
console.log(calculateYears(20), [20, 96, 114]);
console.log(calculateYears(65), [65, 276, 339]);
console.log(calculateYears(43), [43, 188, 229]);
console.log(calculateYears(100), [100, 416, 514]);
