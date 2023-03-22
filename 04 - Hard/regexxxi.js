// https://edabit.com/challenge/yjAes6mGHe9DJpRgh

// Not my answer
let REGEXP = /#(?:[\da-f]{3}){1,2}\b/gi;

// Tests

let str1 = 'color: #3f3; background-color: #AA00ef; and: #abcd';

const validate = (REGEXP) => {
  if (!/\(\?\:/.test(String(REGEXP))) return () => 'invalid';
  return function testReg(str) {
    return str.match(REGEXP);
  };
};

const testExp = validate(REGEXP);

console.log(
  testExp(str1),
  'invalid',
  'You are required to use a non-capturing group in your expression'
);
console.log(testExp(str1), ['#3f3', '#AA00ef']);

// credits to https://javascript.info/regexp-groups
