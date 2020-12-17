// Solution
const xor = (a, b) => {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  return [a, b];
};

// Tests
console.log(xor(10, 20), [20, 10]);
console.log(xor(1, 2), [2, 1]);
console.log(xor(555, 666), [666, 555]);
console.log(xor(3434, 4343), [4343, 3434]);
console.log(xor(5, 6), [6, 5]);
console.log(xor(666, 999), [999, 666]);
