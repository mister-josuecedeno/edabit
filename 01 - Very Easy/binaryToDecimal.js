const binaryToDecimal = (arr) => {
  return parseInt(arr.join(''), 2);
};

// Tests

console.log(binaryToDecimal([0, 0, 0, 1]), 1);
console.log(binaryToDecimal([0, 0, 1, 0]), 2);
console.log(binaryToDecimal([1, 1, 1, 1]), 15);
console.log(binaryToDecimal([0, 1, 1, 0]), 6);
console.log(binaryToDecimal([1, 0, 1, 0, 1, 1, 1]), 87);
console.log(binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1]), 1005);
console.log(binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1]), 2013);
