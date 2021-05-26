const posNegSort = (arr) => {
  const sorted = [...arr.filter((el) => el > 0).sort()];
  const newArr = [];

  for (const el of arr) {
    if (el > 0) {
      newArr.push(sorted.shift());
    } else {
      newArr.push(el);
    }
  }

  return newArr;
};

// Tests
console.log(posNegSort([6, 3, -2, 5, -8, 2, -2]), [2, 3, -2, 5, -8, 6, -2]);
console.log(posNegSort([6, 5, 4, -1, 3, 2, -1, 1]), [1, 2, 3, -1, 4, 5, -1, 6]);
console.log(posNegSort([-5, -5, -5, -5, 7, -5]), [-5, -5, -5, -5, 7, -5]);
console.log(posNegSort([-5, -5, -5, -5, -4, -5]), [-5, -5, -5, -5, -4, -5]);
console.log(
  posNegSort([-5, 4, -8, 3, -1, 2, 1, -7]),
  [-5, 1, -8, 2, -1, 3, 4, -7]
);
console.log(posNegSort([-5, 4, 3]), [-5, 3, 4]);
console.log(posNegSort([]), []);
