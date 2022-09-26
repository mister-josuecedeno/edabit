// https://edabit.com/challenge/7W8aPMTicPy6jbYr3

const willFit = (holds, cargo) => {
  const space = {
    S: 50,
    M: 100,
    L: 200,
  };

  totalHolds = holds.reduce((acc, cv) => acc + space[cv], 0);
  totalCargo = cargo.reduce((acc, cv) => acc + cv, 0);
  return totalCargo <= totalHolds;
};

// Tests

console.log(willFit(['M', 'L', 'L', 'M'], [56, 62, 84, 90]), true);
console.log(willFit(['L', 'L', 'M'], [56, 62, 84, 90]), true);
console.log(
  willFit(['S', 'S', 'S', 'S', 'L'], [40, 50, 60, 70, 80, 90, 200]),
  false
);
console.log(willFit(['S', 'L'], [73, 87, 95, 229]), false);
