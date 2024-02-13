// https://edabit.com/challenge/8NDcdD8QZiMKJJaYL

const trueAlphabetic = (str) => {
  const sorted = [...str.split(' ').join('')].sort();
  const words = [...str];
  return words.map((w) => (w != ' ' ? sorted.shift() : ' ')).join('');
};

// Tests

console.log(trueAlphabetic('hello world'), 'dehll loorw');
console.log(trueAlphabetic('edabit is awesome'), 'aabdee ei imosstw');
console.log(trueAlphabetic('have a nice day'), 'aaac d eehi nvy');
console.log(trueAlphabetic('i love to code'), 'c deei lo ootv');
console.log(trueAlphabetic('joshua senoron'), 'aehjnn ooorssu');
