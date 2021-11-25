const accumulatingArray = (arr) => {
  let total = 0;
  return arr.map(n => total += n);
}

// Tests

console.log(accumulatingArray([1, 1, 1, 1, 1]), [1, 2, 3, 4, 5])
console.log(accumulatingArray([1, 5, 7]), [1, 6, 13])
console.log(accumulatingArray([1, 0, 1, 0, 1]), [1, 1, 2, 2, 3])
console.log(accumulatingArray([1, 2, 3, 0, 0, 1]), [1, 3, 6, 6, 6, 7])
console.log(accumulatingArray([]), [])
