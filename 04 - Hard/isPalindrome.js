const isPalindrome = (str, i = 0, isP) => {
  // base case
  const mid = Math.ceil(str.length / 2);
  if (i >= mid || isP === false) return isP;

  // recursion
  let left = str[i];
  let right = str[str.length - (i + 1)];
  isP = left === right;
  return isPalindrome(str, i + 1, isP);
};

// Test
console.log(isPalindrome('madam'));
console.log(isPalindrome('adieu'));
console.log(isPalindrome('rotor'));
