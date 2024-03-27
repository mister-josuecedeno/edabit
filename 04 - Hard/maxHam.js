// https://edabit.com/challenge/exX3Y9T68wGvLEPHL

const isAnagram = (s1, s2) => {
  return;
};

const getHammingDistance = (s1, s2) => {
  return;
};

const maxHam = (s1, s2) => {
  const anagram = isAnagram(s1, s2);
  const hamEqualsLength = getHammingDistance(s1, s2) === s1.length;
  return anagram && hamEqualsLength;
};

// Tests

console.log(maxHam('dare', 'read'), true);
console.log(maxHam('dear', 'read'), 2);
console.log(maxHam('naive', 'ravine'), false);
console.log(maxHam('observe', 'verbose'), 6);
console.log(maxHam('mister', 'remits'), true);
