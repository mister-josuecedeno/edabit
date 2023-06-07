// https://edabit.com/challenge/ej8abBJapqjz72mgF

const possiblePalindrome = (str) => {
  const regex = /([a-z])\1/g;
  const pairs = [...str].sort().join('').match(regex) || [];
  const diff = pairs.length * 2;
  //return [pairs, diff];
  return str.length - diff <= 1;
};

// Tests

console.log(possiblePalindrome('acabbaa'), true);
console.log(possiblePalindrome('aacbdbc'), true);
console.log(possiblePalindrome('aacbdb'), false);
console.log(possiblePalindrome('abacbb'), false);
console.log(possiblePalindrome('abb'), true);
console.log(possiblePalindrome('bbb'), true);
console.log(possiblePalindrome('bbaa'), true);
console.log(possiblePalindrome('bbaacc'), true);
console.log(possiblePalindrome('bbaaccd'), true);
console.log(possiblePalindrome('bbaacd'), false);
console.log(possiblePalindrome('abc'), false);
console.log(possiblePalindrome('ab'), false);
console.log(possiblePalindrome('aabbccddef'), false);
