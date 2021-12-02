const howManyMissing = (arr) => {
  let range = (arr[arr.length - 1] - arr[0]) + 1;
  return arr.length ? range - arr.length : 0;
}

// Tests

console.log(howManyMissing([1, 3]), 1)
console.log(howManyMissing([7, 10, 11, 12]), 2)
console.log(howManyMissing([1, 3, 5, 7, 9, 11]), 5)
console.log(howManyMissing([5, 6, 7, 8]), 0)
console.log(howManyMissing([1, 2, 3, 8, 9]), 4)
console.log(howManyMissing([1]), 0)
console.log(howManyMissing([]), 0)
