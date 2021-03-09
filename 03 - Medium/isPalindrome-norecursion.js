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

const isPalindrome2 = (str) => {
  str = str.toLowerCase();
  let left = 0;
  let right = str.length - 1;
  const regex = /[^a-z0-9]/;

  while (left < right) {
    if (regex.test(str[left])) {
      left++;
      continue;
    }

    if (regex.test(str[right])) {
      right--;
      continue;
    }

    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

// Tests
console.log(
  isPalindrome2(
    'A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!'
  ),
  true
);
console.log(isPalindrome2('Neuquen'), true);
console.log(isPalindrome2('Not a palindrome'), false);
