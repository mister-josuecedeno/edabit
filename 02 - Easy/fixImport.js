// Solution
const fixImport = (s) => {
  const arr = s.split(' ');
  return `from ${arr[3]} import ${arr[1]}`;
};

// Tests
console.log(
  fixImport('import object from module_name'),
  'from module_name import object'
);
console.log(
  fixImport('import randint from random'),
  'from random import randint'
);
console.log(fixImport('import pi from math'), 'from math import pi');
