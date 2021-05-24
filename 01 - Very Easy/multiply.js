// Currying reference
// https://stackoverflow.com/questions/36314/what-is-currying

const multiply = (arr) => {
  return (n) => {
    return arr.map((el) => el * n);
  };
};

// Tests

console.log(multiply([1, 2, 3])(1), [1, 2, 3]);
console.log(multiply([1, 2, 3])(2), [2, 4, 6]);
console.log(multiply([1, 2, 3])(0), [0, 0, 0]);
console.log(multiply([4, 6, 5])(10), [40, 60, 50]);
console.log(multiply([])(10), [], 'should return an empty array');
