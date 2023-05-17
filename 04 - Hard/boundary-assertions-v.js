// https://edabit.com/challenge/kcQmoJJE8CXC5kqnP

const REGEXP = /(\w{4,})(?!.*yes)/g;

// Tests

const validate = (REGEXP) => {
  if (!/\(\?\!/.test(String(REGEXP)))
    return () => 'need negative lookahead assertion';
  return function testReg(str) {
    return str.match(REGEXP);
  };
};

const str = `
* Texas = no 
* California = yes  
* Florida = yes 
* Michigan = no 
`;

const testStr = validate(REGEXP);

console.log(
  testStr(str),
  'need negative lookahead assertion',
  'You need to use a negative lookahead in your expression.'
);
console.log(testStr(str), ['Texas', 'Michigan']);
