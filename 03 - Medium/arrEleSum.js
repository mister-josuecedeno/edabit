const arrEleSum = (args) => {
  const result = [];

  for (let i = 0; i < args.length; i++) {
    let filtered = args.filter((n) => n !== args[i]);
    result.push(filtered.reduce((acc, cv) => acc + cv, 0));
  }

  return result;
};

// Tests

console.log(arrEleSum([1, 2]), [2, 1]);
console.log(arrEleSum([1, 2, 3]), [5, 4, 3]);
console.log(arrEleSum([1, 2, 3, 4, 5]), [14, 13, 12, 11, 10]);
console.log(
  arrEleSum([10, 20, 30, 40, 50, 60]),
  [200, 190, 180, 170, 160, 150]
);
