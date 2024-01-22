// https://edabit.com/challenge/EfC7rRKdAt8ugcCCT

const isWordChain = (words) => {
  const sameLength = words.every((word) => word.length === words[0].length);
  // how to test that only one letter has changed
  return sameLength;
};

// Tests

console.log(isWordChain(['meal', 'seal', 'seat', 'beat', 'beet']), true);
console.log(isWordChain(['red', 'bed', 'bet', 'bat', 'sat']), true);
console.log(
  isWordChain([
    'heady',
    'ready',
    'beady',
    'beads',
    'meads',
    'meats',
    'seats',
    'feats',
  ]),
  true
);
console.log(isWordChain(['score', 'scare', 'stare', 'spare', 'spire']), true);
console.log(isWordChain(['more', 'mire', 'dire', 'dare', 'date']), true);
console.log(isWordChain(['read', 'red', 'led', 'lad', 'lady']), false);
console.log(isWordChain(['red', 'bat', 'cat', 'sat']), false);
console.log(isWordChain(['candy', 'candies', 'fat', 'rat']), false);
