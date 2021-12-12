const mirror = (arr) => {
  let reflection =  arr.slice(0,-1).reverse();
  return [...arr, ...reflection];
}

// Tests

console.log(mirror([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5, 4, 3, 2, 1])
console.log(mirror([0, 2, 4, 6]), [0, 2, 4, 6, 4, 2, 0])
console.log(mirror([1, 2, 2, 3, 3, 4]), [1, 2, 2, 3, 3, 4, 3, 3, 2, 2, 1])
