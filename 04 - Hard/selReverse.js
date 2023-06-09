// https://edabit.com/challenge/LMRMELZHhzvdqaQE8

const selReverse = (arr, len) => {
  if (len >= arr.length) return arr.reverse();
  if (len === 0) return arr;

  const groups = [];

  for (let i = 0; i < arr.length; i += len) {
    let chunk = arr.slice(i, i + len).reverse();
    groups.push(chunk);
  }

  const flat = groups.flat(1);
  return flat;
};

// Tests

console.log(selReverse([1, 2, 3, 4, 5, 6], 2), [2, 1, 4, 3, 6, 5]);
console.log(
  selReverse([2, 4, 6, 8, 10, 12, 14, 16], 3),
  [6, 4, 2, 12, 10, 8, 16, 14]
);
console.log(selReverse([5, 7, 2, 6, 0, 4, 6], 100), [6, 4, 0, 6, 2, 7, 5]);
console.log(
  selReverse([6, 0, 0, 0, 3, 8, 9, 7, 1], 9),
  [1, 7, 9, 8, 3, 0, 0, 0, 6]
);
console.log(
  selReverse([12, 54, 67, 34, 65, 34, 33], 0),
  [12, 54, 67, 34, 65, 34, 33]
);
console.log(
  selReverse([12, 54, 67, 34, 65, 34, 33], 1),
  [12, 54, 67, 34, 65, 34, 33]
);
console.log(
  selReverse([22, 13, 22, 13, 13, 22, 22, 13], 5),
  [13, 13, 22, 13, 22, 13, 22, 22]
);
console.log(
  selReverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2),
  [2, 1, 4, 3, 6, 5, 8, 7, 10, 9]
);
console.log(selReverse([1], 2), [1]);
console.log(selReverse([1, 2], 2), [2, 1]);
