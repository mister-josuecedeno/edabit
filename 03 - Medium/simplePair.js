const simplePair = (arr, n) => {
  let right = 1;

  for (let el of arr) {
    if (arr.slice(right).includes(n / el)) {
      return [el, parseInt(n / el)];
    }
    right++;
  }

  return null;
};

// Tests
console.log(simplePair([1, 2, 3], 3), [1, 3]);
console.log(simplePair([1, 2, 3], 6), [2, 3]);
console.log(simplePair([1, 2, 3], 7), null);
console.log(simplePair([1, 2, 3, 6], 6), [1, 6]);
console.log(simplePair([1, 2, 3, 4, 5, 6], 15), [3, 5]);
console.log(simplePair([0, 0, 2], 4), null);
console.log(simplePair([0, 0, 2, 2], 4), [2, 2]);
console.log(simplePair([-3, -2, -2, -1, 0, 1, 2, 3, 4], 4), [-2, -2]);
console.log(simplePair([-3, -2, -2, -1, 0, 1, 2, 3, 4], 0), [-3, 0]);
console.log(simplePair([-3, -2, -1, 0, 1, 2, 3, 4], 4), [1, 4]);
