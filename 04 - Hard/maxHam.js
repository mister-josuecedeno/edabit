// https://edabit.com/challenge/exX3Y9T68wGvLEPHL

const isAnagram = (s1, s2) => {
  return [...s1].sort().join() === [...s2].sort().join();
};

const getHammingDistance = (s1, s2) => {
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] != s2[i]) count++;
  }
  return count;
};

const maxHam = (s1, s2) => {
  const anagram = isAnagram(s1, s2);
  const distance = getHammingDistance(s1, s2);
  const hamEqualsLength = distance === s1.length;
  if (anagram && hamEqualsLength) return true;
  if (anagram && distance >= 1) return distance;
  if (!anagram) return false;
};

// Tests

console.log(maxHam('dare', 'read'), true);
console.log(maxHam('dear', 'read'), 2);
console.log(maxHam('naive', 'ravine'), false);
console.log(maxHam('observe', 'verbose'), 6);
console.log(maxHam('mister', 'remits'), true);
