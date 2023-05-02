// https://edabit.com/challenge/kqvtyGZPNPvBbkGg3

const alternateSort = (arr) => {
  const result = [];

  const numbers = arr.filter((n) => !isNaN(n)).sort((a, b) => a - b);
  const letters = arr.filter((n) => isNaN(n)).sort();

  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i]);
    result.push(letters[i]);
  }

  return result;
};

// Tests

console.log(alternateSort([5, 1, 'a', 'c', 2, 1, 3, 'c', 'b', 'e']), [
  1,
  'a',
  1,
  'b',
  2,
  'c',
  3,
  'c',
  5,
  'e',
]);
console.log(alternateSort([-2, 'f', 'A', 0, 100, 'z']), [
  -2,
  'A',
  0,
  'f',
  100,
  'z',
]);
console.log(alternateSort(['a', 'b', 'c', 1, 2, 3]), [1, 'a', 2, 'b', 3, 'c']);
console.log(
  alternateSort(['e', 'd', 'a', 'b', 'i', 't', 1, 10, 100, 2, 20, 200]),
  [1, 'a', 2, 'b', 10, 'd', 20, 'e', 100, 'i', 200, 't']
);
console.log(alternateSort(['X', 15, 12, 18, 'Y', 'Z']), [
  12,
  'X',
  15,
  'Y',
  18,
  'Z',
]);
