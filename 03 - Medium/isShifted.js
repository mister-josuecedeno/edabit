// Set-up

function isShifted(arr1, arr2) {
  if (arr2.every((n) => n === 0)) return true;
  const shift = arr2[0] - arr1[0];
  return shift;
}

function isMultiplied(arr1, arr2) {
  if (arr2.every((n) => n === 0)) return true;
  const shift = arr2[0] / arr1[0];
  return shift;
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
