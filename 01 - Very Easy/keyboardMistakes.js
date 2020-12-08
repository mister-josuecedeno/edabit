// Solution
const keyboardMistakes = (str) => {
  let newStr = '';

  const correction = {
    4: 'A',
    5: 'S',
    0: 'O',
    1: 'I',
  };

  for (let char of str) {
    newStr += correction[char] || char;
  }

  return newStr;
};

// Tests
console.log(keyboardMistakes('MUB45H1R'), 'MUBASHIR');
console.log(keyboardMistakes('DUBL1N'), 'DUBLIN');
console.log(keyboardMistakes('51NG4P0RE'), 'SINGAPORE');
console.log(keyboardMistakes('P4K15T4N'), 'PAKISTAN');
console.log(keyboardMistakes('P4R15'), 'PARIS');
