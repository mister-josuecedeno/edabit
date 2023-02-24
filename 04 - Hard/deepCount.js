// https://edabit.com/challenge/Aq9mrJ9FWyxWCpgLq

const deepCount = (arr) => {
  return;
};

// Tests

console.log(deepCount([1, 2, 3]), 3);
console.log(deepCount(['x', 'y', ['z']]), 4);
console.log(deepCount(['a', 'b', ['c', 'd', ['e']]]), 7);
console.log(deepCount([[1], [2], [3]]), 6);
console.log(deepCount([[[[[[[[[]]]]]]]]]), 8);
console.log(deepCount([null]), 1);
console.log(deepCount([[]]), 1);
console.log(deepCount([[undefined], [null, ['edabit']], [0]]), 8);
