// Solution
const determineLever = (arr) => {
  const leverClass = {
    0: 'third class lever',
    1: 'first class lever',
    2: 'second class lever',
  };

  return leverClass[arr.indexOf('f')];
};

// Tests
console.log(determineLever(['e', 'f', 'l']), 'first class lever');
console.log(determineLever(['e', 'l', 'f']), 'second class lever');
console.log(determineLever(['f', 'e', 'l']), 'third class lever');
