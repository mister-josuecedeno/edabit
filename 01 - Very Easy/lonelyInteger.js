// You are given an array of integers having both negative
// and positive values, except for one integer which can be
// negative or positive. Create a function to find out that integer.

const lonelyInteger = (nums) => {
  return nums.filter((n) => nums.indexOf(n * -1) === -1)[0];
};

// Tests

console.log(lonelyInteger([1, -1, 2, -2, 3]), 3);
console.log(lonelyInteger([-3, 1, 2, 3, -1, -4, -2]), -4);
console.log(lonelyInteger([1, -1, 2, -2, 3, 3]), 3);
console.log(lonelyInteger([-110, 110, -38, -38, -62, 62, -38, -38, -38]), -38);
console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105]), -9);
