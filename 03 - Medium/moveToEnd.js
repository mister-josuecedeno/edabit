const moveToEnd = (arr, el) => {
  const elGroup = arr.filter(e => e === el);
  const other = arr.filter(e => e !== el);
  return [...other, ...elGroup];
}

// Tests

console.log(moveToEnd([1, 3, 2, 4, 4, 1], 1), [3, 2, 4, 4, 1, 1])
console.log(moveToEnd([7, 8, 9, 1, 2, 3, 4], 9), [7, 8, 1, 2, 3, 4, 9])
console.log(moveToEnd([7, 7, 7, 6, 6, 6, 6], 7), [6, 6, 6, 6, 7, 7, 7])
console.log(moveToEnd(["a", "c", "c", "c", "b", "c"], "b"), ["a", "c", "c", "c", "c", "b"])
console.log(moveToEnd(["a", "c", "c", "c", "b", "c"], "c"), ["a", "b", "c", "c", "c", "c"])
console.log(moveToEnd(["a", "a", "a", "b"], "a"), ["b", "a", "a", "a"])
