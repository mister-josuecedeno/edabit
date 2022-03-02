const unique = (arr) => {
  return +arr.filter((n) => arr.indexOf(n) === arr.lastIndexOf(n)).join('');
};

// Tests
console.log(unique([3, 3, 3, 7, 3, 3]), 7);
console.log(unique([0, 0, 0.77, 0, 0]), 0.77);
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1]), 0);
console.log(unique([-4, -4, -4, 4]), 4);
console.log(unique([8, 8, 8, 8, 8, 8, 8, 0.5]), 0.5);
console.log(unique([2, 1, 2, 2, 2, 2, 2, 2]), 1);
