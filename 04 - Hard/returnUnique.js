// https://edabit.com/challenge/TyX7xfsAPfJZxfaZq
// Map - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
const returnUnique = (arr) => {
  const numMap = new Map();

  for (const n of arr) {
    let value = numMap.get(n) + 1 || 1;
    numMap.set(n, value);
  }

  return Array.from(numMap)
    .filter((a) => a[1] === 1)
    .map((n) => n[0]);
};

// Tests

console.log(returnUnique([1, 9, 8, 8, 7, 6, 1, 6]), [9, 7]);
console.log(returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]), [2, 1]);
console.log(returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]), [5, 6]);
console.log(returnUnique([4, 3, 9, 9, 1, 1, 6, 1, 6, 2, 4]), [3, 2]);
console.log(returnUnique([44, 44, 44, 2, 55, 55, 55, 0, 66, 66, 66]), [2, 0]);
console.log(returnUnique([-9, -9, -9, 7, -9, -9, 1]), [7, 1]);
console.log(
  returnUnique([2, 2, -19, 2, 7, 7, 4, 9, 9, 0, 0, 3, 3, 3]),
  [-19, 4]
);
