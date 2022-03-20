const findOdd = (arr) => {
  const count = (num) => {
    return arr.filter((n) => n == num).length;
  };

  return arr.filter((n) => count(n) % 2 !== 0)[0];
};

// Tests

console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1));
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5));
console.log(findOdd([10], 10));
