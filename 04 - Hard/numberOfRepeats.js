const numberOfRepeats = (str) => str.split(str[0]).length - 1;

// Tests

console.log(numberOfRepeats('abc'), 1);
console.log(numberOfRepeats('abcabcabc'), 3);
console.log(numberOfRepeats('abab'), 2);
console.log(numberOfRepeats('LVLVLVLV'), 4);
console.log(numberOfRepeats('inkinkinkinkinkink'), 6);
console.log(numberOfRepeats('abcdabcdabcdabcdabcdabcdabcd'), 7);
