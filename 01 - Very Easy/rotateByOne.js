const rotateByOne = (arr) => {
  arr.unshift(arr.pop());
  return arr;
};

// Tests
console.log(rotateByOne([1, 2, 3, 4, 5]), [5, 1, 2, 3, 4]);
console.log(rotateByOne([6, 5, 8, 9, 7]), [7, 6, 5, 8, 9]);
console.log(rotateByOne([20, 15, 26, 8, 4]), [4, 20, 15, 26, 8]);
console.log(rotateByOne([7, 8, 6, 4, 5]), [5, 7, 8, 6, 4]);
console.log(rotateByOne([5, 9, 45, 1, 2]), [2, 5, 9, 45, 1]);
console.log(
  rotateByOne([5, 9, 45, 1, 2, 8, 10, 12, 15]),
  [15, 5, 9, 45, 1, 2, 8, 10, 12]
);

// Author: Juan esteban
