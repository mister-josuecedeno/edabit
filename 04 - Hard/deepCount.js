// https://edabit.com/challenge/Aq9mrJ9FWyxWCpgLq

// This is not my solution
const deepCount = (arr = []) => {
  return arr.reduce((acc, val) => {
    return acc + (Array.isArray(val) ? deepCount(val) : 0);
  }, arr.length);
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
