// https://edabit.com/challenge/krzm6Y2riBDYJJa2R

const isPolydivisible = (n) => {
  if (n < 10) return true;

  const digits = [...`${n}`];

  for (let i = 1; i <= digits.length; i++) {
    let number = digits.slice(0, i).join('');
    let isInteger = Number.isInteger(+number / i);
    if (!isInteger) {
      return false;
    }
  }

  return true;
};

// Tests

console.log(isPolydivisible(1232), true);
console.log(isPolydivisible(123220), false);
console.log(isPolydivisible(0), true);
console.log(isPolydivisible(1), true);
console.log(isPolydivisible(141), true);
