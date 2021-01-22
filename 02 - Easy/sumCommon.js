const sumCommon = (arr1, arr2, arr3) => {
  const arr = [];

  for (let n of arr1) {
    if (arr2.includes(n) && arr3.includes(n)) {
      arr.push(n);
    }
  }

  return arr.reduce((acc, cv) => acc + cv, 0);
};

// Tests

console.log(sumCommon([1, 2, 3], [5, 3, 2], [7, 3, 2]), 5);
console.log(sumCommon([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]), 7);
console.log(sumCommon([1], [1], [1]), 1);
console.log(sumCommon([1], [1], [2]), 0);
