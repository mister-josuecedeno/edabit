// https://edabit.com/challenge/fbTF9EksvFpq3wZaX

const getPrices = (arr) => {
  const regex = /\d+\.\d+/gi;
  return arr.map((p) => +p.match(regex));
};

// Tests

console.log(
  getPrices([
    'ice cream ($5.99)',
    'banana ($0.20)',
    'sandwich ($8.50)',
    'soup ($1.99)',
  ]),
  [5.99, 0.2, 8.5, 1.99]
);
console.log(getPrices(['salad ($4.99)']), [4.99]);
console.log(
  getPrices([
    'artichokes ($1.99)',
    'rotiserrie chicken ($5.99)',
    'gum ($0.75)',
  ]),
  [1.99, 5.99, 0.75]
);
console.log(
  getPrices(['pizza ($2.99)', 'shampoo ($15.75)', 'trash bags ($15.00)']),
  [2.99, 15.75, 15]
);
