// https://edabit.com/challenge/euDed7qoDzgvcHwdS

const isIcecreamSandwich = (str) => {
  const regex = /((.)\2+)|(\S)/g;
  const matches = str.match(regex) || [];
  if (matches.length != 3) return false;
  return matches[0].length === matches[2].length;
};

// Tests

console.log(isIcecreamSandwich('AABBBAA'), true);
console.log(isIcecreamSandwich('3&&3'), true);
console.log(isIcecreamSandwich('yyyyymmmmmmmmyyyyy'), true);
console.log(isIcecreamSandwich('hhhhhhhhmhhhhhhhh'), true);
console.log(isIcecreamSandwich('CDC'), true);
console.log(isIcecreamSandwich('BBBBB'), false, 'only filling');
console.log(isIcecreamSandwich('AAACCCAA'), false, 'ends are unbalanced');
console.log(
  isIcecreamSandwich('AACDCAA'),
  false,
  'can only have one type of filling'
);
console.log(isIcecreamSandwich('AAABB'), false, 'only one end');
console.log(isIcecreamSandwich('AA'), false, 'too short');
console.log(isIcecreamSandwich('A'), false, 'too short');
console.log(isIcecreamSandwich(''), false, 'too short');
