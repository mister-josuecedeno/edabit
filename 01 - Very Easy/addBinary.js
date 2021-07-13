const addBinary = (a, b) => {
  return (a + b).toString(2);
};

// Tests
console.log(addBinary(1, 1), '10');
console.log(addBinary(1, 2), '11');
console.log(addBinary(4, 5), '1001');
console.log(addBinary(8, 20), '11100');
console.log(addBinary(100, 20), '1111000');
console.log(addBinary(40, 50), '1011010');
console.log(addBinary(65, 77), '10001110');
console.log(addBinary(40, 50), '1011010');
console.log(addBinary(1, 0), '1');
