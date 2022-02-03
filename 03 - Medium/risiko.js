const risiko = (att, def) => {
  const compare = (a, d) => (a > d ? 1 : 0);
  const attacks = att.sort((a, b) => b - a);
  const defends = def.sort((a, b) => b - a);
  const battles = Math.min(att.length, def.length);

  let losses = 0;

  for (let i = 0; i < battles; i++) {
    losses += compare(attacks[i], defends[i]);
  }

  return losses;
};

// Tests

console.log(risiko([3, 6, 4], [2, 5, 3]), 3, 'Example #1');
console.log(risiko([3, 6], [6, 4, 4]), 0, 'Example #2');
console.log(risiko([3, 1], [1]), 1, 'Example #3');
console.log(risiko([4, 4, 3], [3, 2]), 2);
console.log(risiko([5], [3, 1, 4]), 1);
console.log(risiko([3, 5], [3, 5]), 0);
console.log(risiko([3, 6, 6], [6]), 0);
console.log(risiko([5, 4], [3, 4, 3]), 2);
console.log(risiko([3], [2, 1]), 1);
console.log(risiko([3, 3, 3], [2, 1, 2]), 3);
