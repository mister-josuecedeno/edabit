// https://edabit.com/challenge/p74GFxJkNQRRbLTwG

const bugger = (num, ct = 0) => {
  if (num.toString().length === 1) return ct;
  let result = eval(num.toString().split('').join('*'));
  return bugger(result, ++ct);
};

// Tests

console.log(bugger(39), 3);
console.log(bugger(4), 0);
console.log(bugger(25), 2);
console.log(bugger(999), 4);
