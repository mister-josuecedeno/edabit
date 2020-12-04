// Create a function which takes in a
// number n as input and returns all numbers
// up to and including n joined together in a string.
// Separate each digit from each other with the character "-".

// Solution
const joinDigits = (n) => {
  let str = '';

  for (let i = 1; i <= n; i++) {
    str += i;
  }

  return str.split('').join('-');
};

// Tests

console.log(joinDigits(1), '1');
console.log(joinDigits(2), '1-2');
console.log(joinDigits(3), '1-2-3');
console.log(joinDigits(4), '1-2-3-4');
console.log(joinDigits(5), '1-2-3-4-5');
console.log(joinDigits(6), '1-2-3-4-5-6');
console.log(joinDigits(7), '1-2-3-4-5-6-7');
console.log(joinDigits(8), '1-2-3-4-5-6-7-8');
console.log(joinDigits(9), '1-2-3-4-5-6-7-8-9');
console.log(joinDigits(10), '1-2-3-4-5-6-7-8-9-1-0');
