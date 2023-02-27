// https://edabit.com/challenge/2xLmzBEjBzg4LSygs

const REGEXP = /([0-9]{2}:){5}([0-9a-fA-F]{2}){1}/i;

// Tests
const str1 = '01:32:54:67:89:AB';
const str2 = '0132546789AB';
const str3 = '01:32:54:67:89';
const str4 = '01:32:54:67:89:ZZ';

const validate = (REGEXP) => {
  return function testReg(str) {
    return REGEXP.test(str);
  };
};

const testExp = validate(REGEXP);

console.log(testExp(str1), true);
console.log(testExp(str2), false, 'no colons');
console.log(testExp(str3), false, '5 numbers, need 6');
console.log(testExp(str4), false, 'ZZ at the end');

// credits to https://javascript.info/regexp-groups
