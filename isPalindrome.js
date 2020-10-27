// A palindrome is a word, phrase, number or other sequence of characters
// which reads the same backward or forward, such as madam or kayak.

// Write a function that takes a string and determines whether it's a
// palindrome or not. The function should return a boolean (true or false value).

// Solution
const isPalindrome = (str) => {
  const regex = /[a-z0-9]/gi;
  const match = str.match(regex).join('').toLowerCase();

  return match === [...match].reverse().join('');
};

// Tests
console.log(
  isPalindrome(
    'A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!'
  ),
  true
);
console.log(isPalindrome('Neuquen'), true);
console.log(isPalindrome('Not a palindrome'), false);
