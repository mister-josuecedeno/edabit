const multiply = (arr) => {
  return arr.map((l) => new Array(arr.length).fill(l));
};

// Tests

console.log(multiply(['*', '%', '$']), [
  ['*', '*', '*'],
  ['%', '%', '%'],
  ['$', '$', '$'],
]);
console.log(multiply([4, 5]), [
  [4, 4],
  [5, 5],
]);
console.log(multiply(['A', 'B', 'C', 'D', 'E']), [
  ['A', 'A', 'A', 'A', 'A'],
  ['B', 'B', 'B', 'B', 'B'],
  ['C', 'C', 'C', 'C', 'C'],
  ['D', 'D', 'D', 'D', 'D'],
  ['E', 'E', 'E', 'E', 'E'],
]);
console.log(multiply([1]), [[1]]);
