// A man has n number of apples. If he eats a percentage p of the apples (if apples are available), his children will share the remainder of the apples. Create a function to determine the number of "whole" apples his children got. If his children did not get any apples, return "The children didn't get any apples".

// Solution
const getNumberOfApples = (n, p) => {
  const pct = parseInt(p) / 100;
  return Math.floor(n - n * pct) || "The children didn't get any apples";
};

// Tests

console.log(getNumberOfApples(10, '90%'), 1);
console.log(getNumberOfApples(25, '10%'), 22);
console.log(getNumberOfApples(0, '10%'), "The children didn't get any apples");
console.log(getNumberOfApples(40, '30%'), 28);
console.log(getNumberOfApples(10, '44%'), 5);
console.log(
  getNumberOfApples(12, '100%'),
  "The children didn't get any apples"
);
console.log(
  getNumberOfApples(40, '100%'),
  "The children didn't get any apples"
);
