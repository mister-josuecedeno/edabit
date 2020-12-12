// Solution

const countUppercase = (words) => {
  const regex = /[A-Z]/g;
  const chars = words.join('').match(regex);
  return chars === null ? 0 : chars.length;
};

// Tests
console.log(countUppercase(['SOLO', 'hello', 'Tea', 'wHat']), 6);
console.log(countUppercase(['little', 'lower', 'down']), 0);
console.log(countUppercase(['EDAbit', 'Educate', 'Coding']), 5);
