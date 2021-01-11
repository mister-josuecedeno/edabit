// slice, reverse (sort), join, filter, modulus
function challenge1(s) {
  return s.slice(0, 5); // return the first five characters
}

function challenge2(s) {
  return s.slice(-5); // return the last five characters
}

function challenge3(s) {
  return [...s.slice()].reverse().join(''); // no need for slice. Reverse all characters.
}

function challenge4(s) {
  return [...s.slice(0, 6)].reverse().join(''); // First six characters reversed
}

function challenge5(s) {
  return [...s.slice(-7)].filter((n, i) => i % 2 === 0).join(''); // last seven characters. only even index.
}

// Tests
var txt = 'abcdefghijklmnopqrstuvwxyz';
var nums = '0123456789';

console.log(challenge1(txt), 'abcde');
console.log(challenge2(txt), 'vwxyz');
console.log(challenge3(txt), 'zyxwvutsrqponmlkjihgfedcba');
console.log(challenge4(txt), 'fedcba');
console.log(challenge5(txt), 'tvxz');

console.log(challenge1(nums), '01234');
console.log(challenge2(nums), '56789');
console.log(challenge3(nums), '9876543210');
console.log(challenge4(nums), '543210');
console.log(challenge5(nums), '3579');
