function isShifted(arr1, arr2) {
  return arr2.map((n, i) => n - arr1[i]).every((n, i, arr) => n === arr[0]);
}

function isMultiplied(arr1, arr2) {
  return arr2.map((n, i) => n / arr1[i]).every((n, i, arr) => n === arr[0]);
}

// Tests

console.log(isShifted([1, 2, 3], [2, 3, 4]), true);
console.log(isShifted([1, 2, 3], [-9, -8, -7]), true);
console.log(isMultiplied([1, 2, 3], [10, 20, 30]), true);
console.log(isMultiplied([1, 2, 3], [-0.5, -1, -1.5]), true);
console.log(isMultiplied([1, 2, 3], [0, 0, 0]), true);
console.log(isShifted([1, 2, 3], [2, 3, 5]), false);
console.log(isShifted([1, 2, 3], [-9, -1, -7]), false);
console.log(isMultiplied([1, 2, 3], [10, 20, 29]), false);
console.log(isMultiplied([1, 2, 3], [-0.5, -1, -2]), false);
console.log(isMultiplied([1, 2, 3], [0, 0, 1]), false);
