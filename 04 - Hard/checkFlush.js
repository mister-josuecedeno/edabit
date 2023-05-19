// https://edabit.com/challenge/StoCYdQvX2i7zaNLY

const checkFlush = (table, hand) => {
  const tableSuits = table.map((c) => c.split('_')[1]);
  const handSuits = hand.map((c) => c.split('_')[1]);
  const hasTwoOfAKind = handSuits[0] === handSuits[1];
  const hasRequiredCard = tableSuits.includes(handSuits[0]);
  return hasTwoOfAKind && hasRequiredCard;
};

// Tests

console.log(
  checkFlush(['A_S', 'J_H', '7_D', '8_D', '10_D'], ['J_D', '3_D']),
  true
);
console.log(
  checkFlush(['10_S', '7_S', '9_H', '4_S', '3_S'], ['K_S', 'Q_S']),
  true
);
console.log(
  checkFlush(['3_S', '10_H', '10_D', '10_C', '10_S'], ['3_S', '4_D']),
  false
);
console.log(
  checkFlush(['8_H', '10_H', '10_D', 'J_H', '10_S'], ['5_D', 'Q_H']),
  false
);
