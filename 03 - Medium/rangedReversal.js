const rangedReversal = (arr, start, end) => {
  let sub = arr.slice(start, end+1).reverse();
  arr.splice(start, sub.length, ...sub);
  return arr;
}

// TESTS
console.log(rangedReversal([1, 2, 3, 4, 5, 6], 1, 3), [1, 4, 3, 2, 5, 6])
console.log(rangedReversal([1, 2, 3, 4, 5, 6], 0, 4), [5, 4, 3, 2, 1, 6])
console.log(rangedReversal([9, 8, 7, 4], 0, 0), [9, 8, 7, 4])
console.log(rangedReversal([9, 8, 7, 4], 0, 3), [4, 7, 8, 9])
console.log(rangedReversal([8, 9, 3, 3, 2, 7, 4], 5, 6), [8, 9, 3, 3, 2, 4, 7])
console.log(rangedReversal([1, 2], 0, 1), [2, 1])
console.log(rangedReversal([7, 8, 9, 4], 1, 2), [7, 9, 8, 4])
