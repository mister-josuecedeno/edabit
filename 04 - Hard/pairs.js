// https://edabit.com/challenge/yoRh3uocRGRYgmqHJ

const pairs = (arr) => {
  if (arr.length === 0) return [];

  const result = [];

  while (arr.length > 0) {
    let first = arr.shift();
    let second = arr.pop() || first;

    result.push([first, second]);
  }
  return result;
};

// Tests

console.log(pairs([1, 2, 3, 4, 5, 6, 7]), [
  [1, 7],
  [2, 6],
  [3, 5],
  [4, 4],
]);
console.log(pairs([1, 2, 3, 4, 5, 6]), [
  [1, 6],
  [2, 5],
  [3, 4],
]);
console.log(pairs([5, 9, 8, 1, 2]), [
  [5, 2],
  [9, 1],
  [8, 8],
]);
console.log(pairs([5, 6, 7]), [
  [5, 7],
  [6, 6],
]);
console.log(pairs([1, 1, 4, 4, 5, 5]), [
  [1, 5],
  [1, 5],
  [4, 4],
]);
console.log(pairs([9, 9, 9, 9, 3, 3, 9]), [
  [9, 9],
  [9, 3],
  [9, 3],
  [9, 9],
]);
console.log(pairs([5, 6]), [[5, 6]]);
console.log(pairs([5]), [[5, 5]]);
console.log(pairs([]), []);
