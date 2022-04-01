const overTwentyOne = (cards) => {
  const faceCards = ['J', 'Q', 'K', 'A'];
  const getValue = (card) => (faceCards.includes(card) ? 10 : card);
  let sum = cards.reduce((acc, cv) => acc + getValue(cv), 0);
  sum = sum > 21 && cards.includes('A') ? sum - 11 : sum;
  return sum > 21;
};

// Tests

console.log(overTwentyOne(['A', 2, 3]), false);
console.log(overTwentyOne(['A', 'J', 'K']), false);
console.log(overTwentyOne(['A', 'J', 'K', 'Q']), true);
console.log(overTwentyOne([5, 3, 6, 6, 7, 9]), true);
