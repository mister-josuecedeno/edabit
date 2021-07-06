const sumFive = (arr) => {
  return arr.filter((n) => n > 5).reduce((ac, cv) => ac + cv, 0);
};

// Tests
console.log(sumFive([1, 5, 20, 30, 4, 9, 18]), 77);
console.log(sumFive([1, 2, 3, 4]), 0);
console.log(sumFive([10, 12, 28, 47, 55, 100]), 252);
console.log(sumFive([25, 44, 6, 4, 3, 36]), 111);
console.log(sumFive([5, 2, 150, 187, 254, 0]), 591);
console.log(sumFive([1000, 2500, 2, 4, 500, 400]), 4400);
console.log(sumFive([125.5, 147.2, 548.6, 2.3, 1.5]), 821.3);
