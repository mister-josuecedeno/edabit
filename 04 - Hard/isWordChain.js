// https://edabit.com/challenge/EfC7rRKdAt8ugcCCT

const countDifferentLetters = (word1, word2) => {
  if (word1.length !== word2.length) return -1;

  let count = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      count++;
      if (count > 1) return count;
    }
  }

  return count;
};

const isWordChain = (words) => {
  for (let i = 1; i < words.length; i++) {
    let differenceCount = countDifferentLetters(words[i], words[i - 1]);
    if (differenceCount !== 1) return false;
  }

  return true;
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
