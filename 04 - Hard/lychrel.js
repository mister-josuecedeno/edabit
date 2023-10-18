// https://edabit.com/challenge/d8gGWEAJuxaPrGoiT

const reverseString = (str) => {
  return str.split('').reverse().join('');
};

const getSum = (n) => {
  return n + +reverseString(`${n}`);
};

const isPalindrome = (str) => {
  return str === reverseString(str);
};

const lychrel = (n, ct = 0) => {
  if (isPalindrome(`${n}`)) return ct;
  if (ct > 500) return true;
  return lychrel(getSum(n), ++ct);
};

// Tests

console.log(lychrel(33), 0);
console.log(lychrel(65), 1);
console.log(lychrel(348), 3);
console.log(lychrel(196), true);
console.log(lychrel(89), 24);
console.log(lychrel(7582), 4);
console.log(lychrel(1945), true);
console.log(lychrel(3673), true);
console.log(lychrel(9485367), 2);
console.log(lychrel(695), 3);
