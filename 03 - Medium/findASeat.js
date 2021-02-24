const findASeat = (n, arr) => {
  let capacity = n / arr.length;
  let half = capacity * 0.5;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= half) return i;
  }

  return -1;
};

// Tests

console.log(findASeat(20, [3, 5, 4, 2]), 3);
console.log(findASeat(1000, [50, 20, 80, 90, 100, 60, 30, 50, 80, 60]), 0);
console.log(findASeat(200, [35, 23, 40, 21, 38]), -1);
console.log(findASeat(200, [35, 23, 18, 10, 40]), 2);
console.log(findASeat(21, [6, 3, 7]), 1);
console.log(findASeat(11037, [1839, 0, 0]), 0);
