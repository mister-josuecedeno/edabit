// https://edabit.com/challenge/ccZBsRp6pX869gyqx

const vowels = {
  a: 0,
  e: 1,
  i: 2,
  o: 2,
  u: 3,
};

const encrypt = (word) => {
  const reversed = [...word].reverse();
  // const replaceVowels = reversed.map((l) => vowels[l] ?? l).join('');

  const replaceVowels = reversed
    .map((l) => (vowels[l] === undefined ? l : vowels[l]))
    .join('');

  return `${replaceVowels}aca`;
};

// Tests

console.log(encrypt('karaca'), '0c0r0kaca');
console.log(encrypt('burak'), 'k0r3baca');
console.log(encrypt('banana'), '0n0n0baca');
console.log(encrypt('alpaca'), '0c0pl0aca');
console.log(encrypt('hello'), '2ll1haca');
