// https://edabit.com/challenge/rm5MSuzTPGr4t3X7h

const almostPalindrome = (str) => {
  const half = Math.floor(str.length / 2);
  const start = [...str.slice(0, half)];
  const end = [...str.slice(half)].reverse();
  const change =
    start.map((l, i) => l === end[i]).filter((l) => l === false) || [];
  return change.length === 1;
};

// Tests

console.log(almostPalindrome('abcdcbg'), true);
console.log(almostPalindrome('abccia'), true);
console.log(almostPalindrome('abcdaaa'), false);
console.log(almostPalindrome('gggfgig'), true);
console.log(almostPalindrome('gggffff'), false);
console.log(almostPalindrome('GIGGG'), true);
console.log(almostPalindrome('ggggi'), true);
console.log(
  almostPalindrome('ggggg'),
  false,
  'Should return false if already palindrome.'
);
console.log(
  almostPalindrome('gggfggg'),
  false,
  'Should return false if already palindrome.'
);
console.log(almostPalindrome('1234312'), false);
