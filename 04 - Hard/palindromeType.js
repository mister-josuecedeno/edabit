// https://edabit.com/challenge/P5aEB9rvFibg4rRBg

// Alternate palindrome check
// const isPalindrome = s => [...s].reverse().join('') === s;

const isPalindrome = (n) => {
  const str = `${n}`;
  const regex = /[a-z0-9]/gi;
  const match = str.match(regex).join('').toLowerCase();

  return match === [...match].reverse().join('');
};

const palindromeType = (n) => {
  const decimal = isPalindrome(n);
  const binary = isPalindrome(n.toString(2));
  if (decimal && binary) return 'Decimal and binary.';
  if (decimal && !binary) return 'Decimal only.';
  if (!decimal && binary) return 'Binary only.';
  return 'Neither!';
};

// Tests

console.log(palindromeType(1934391), 'Decimal and binary.');
console.log(palindromeType(9994521), 'Binary only.');
console.log(palindromeType(5841485), 'Decimal and binary.');
console.log(palindromeType(8337738), 'Neither!');
console.log(palindromeType(7447), 'Decimal and binary.');
console.log(palindromeType(18985), 'Binary only.');
console.log(palindromeType(7), 'Decimal and binary.');
console.log(palindromeType(1306031), 'Decimal only.');
console.log(palindromeType(1), 'Decimal and binary.');
console.log(palindromeType(1903127), 'Binary only.');
console.log(palindromeType(4), 'Decimal only.');
console.log(palindromeType(48084), 'Decimal only.');
console.log(palindromeType(427787), 'Binary only.');
console.log(palindromeType(456), 'Neither!');
console.log(palindromeType(313), 'Decimal and binary.');
console.log(palindromeType(3664663), 'Decimal only.');
console.log(palindromeType(585585), 'Decimal and binary.');
console.log(palindromeType(14441), 'Decimal only.');
console.log(palindromeType(8494948), 'Decimal only.');
console.log(palindromeType(932), 'Neither!');
console.log(palindromeType(7115931), 'Binary only.');
console.log(palindromeType(101), 'Decimal only.');
console.log(palindromeType(6286333), 'Binary only.');
