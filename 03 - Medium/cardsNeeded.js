function cardsNeeded(n) {
  return n >= 0 ? ((3 * n + 1) * n) / 2 : 'invalid';
}

// Tests

console.log(cardsNeeded(-3), 'invalid');
console.log(cardsNeeded(-2), 'invalid');
console.log(cardsNeeded(-1), 'invalid');
console.log(cardsNeeded(0), 0);
console.log(cardsNeeded(1), 2);
console.log(cardsNeeded(2), 7);
console.log(cardsNeeded(3), 15);
console.log(cardsNeeded(4), 26);
console.log(cardsNeeded(5), 40);
console.log(cardsNeeded(6), 57);
console.log(cardsNeeded(7), 77);
console.log(cardsNeeded(8), 100);
