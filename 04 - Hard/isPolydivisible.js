// https://edabit.com/challenge/krzm6Y2riBDYJJa2R

// In Progress
const isPolydivisible = (n) => {
  const length = `${n}`.length;
  return Math.pow(10, length);
};

// Tests

console.log(isPolydivisible(1232), true);
console.log(isPolydivisible(123220), false);
console.log(isPolydivisible(0), true);
console.log(isPolydivisible(1), true);
console.log(isPolydivisible(141), true);
