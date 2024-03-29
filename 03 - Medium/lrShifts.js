function leftShift(arr, num) {
  for (let i = 0; i < num; i++) {
    arr.push(arr.shift());
  }
  return arr;
}

function rightShift(arr, num) {
  for (let i = 0; i < num; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}

// Tests

console.log(leftShift([1, 2, 3, 4], 1), [2, 3, 4, 1]);
console.log(rightShift([1, 2, 3, 4], 1), [4, 1, 2, 3]);
console.log(leftShift([1, 2, 3, 4, 5], 3), [4, 5, 1, 2, 3]);
console.log(leftShift([1, 2, 3, 4, 5], 5), [1, 2, 3, 4, 5]);
console.log(leftShift([1, 2, 3, 4, 5], 6), [2, 3, 4, 5, 1]);
console.log(leftShift([1, 2, 3, 4, 5], 1), [2, 3, 4, 5, 1]);
console.log(leftShift([1, 2, 3, 4, 5], 4), [5, 1, 2, 3, 4]);
console.log(rightShift([1, 2, 3, 4, 5], 1), [5, 1, 2, 3, 4]);
console.log(rightShift([1, 2, 3, 4, 5], 3), [3, 4, 5, 1, 2]);
console.log(rightShift([1, 2, 3, 4, 5], 0), [1, 2, 3, 4, 5]);
console.log(rightShift([1, 2, 3, 4, 5], 15), [1, 2, 3, 4, 5]);
