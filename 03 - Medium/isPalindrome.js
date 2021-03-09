const isPalindrome = (str) => {
  let first;
  let last;

  if (str.length < 2) return true;

  first = str[0];
  last = str.slice(-1);

  if (first === last) {
    return isPalindrome(str.slice(1, -1));
  } else {
    return false;
  }
};

// Tests
console.log(isPalindrome('abcba'), true);
console.log(isPalindrome('abbba'), true);
console.log(isPalindrome('abbbba'), true);
console.log(isPalindrome('abccdba'), false);
console.log(isPalindrome('abbaa'), false);
console.log(isPalindrome('abbbbb'), false);
console.log(isPalindrome('ad'), false);
console.log(isPalindrome('b'), true);
console.log(isPalindrome(''), true);
