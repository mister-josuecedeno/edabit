// https://edabit.com/challenge/PgNvoxjjy7Gx6zDni

// Refactor - the order is wrong
const multiplicity = (arr) => {
  const charMap = {};

  for (const char of arr) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return Object.entries(charMap).map((e) => [+e[0], e[1]]);
};

// Tests

console.log(multiplicity([1, 1, 1, 2, 2, 3]), [
  [1, 3],
  [2, 2],
  [3, 1],
]);
console.log(multiplicity([1, 1, 1, 1, 1]), [[1, 5]]);
console.log(multiplicity([1, 5, 4, 3, 2]), [
  [1, 1],
  [5, 1],
  [4, 1],
  [3, 1],
  [2, 1],
]);
console.log(multiplicity([5, 5, 5, 5, 8]), [
  [5, 4],
  [8, 1],
]);
console.log(multiplicity([3, 3, 3, 0]), [
  [3, 3],
  [0, 1],
]);
console.log(multiplicity([1, 1, 2, 2, 3, 3, 4, 4]), [
  [1, 2],
  [2, 2],
  [3, 2],
  [4, 2],
]);
console.log(multiplicity([4, 4, 3, 3, 2, 2, 1, 1]), [
  [4, 2],
  [3, 2],
  [2, 2],
  [1, 2],
]);
