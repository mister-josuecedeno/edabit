const rotateArray = (arr, n) => {
  let sign = Math.sign(n);
  let removedN;

  for (let i = 0; i < Math.abs(n); i++) {
    if (sign === 1) {
      removedN = arr.pop(); // remove from end
      arr.unshift(removedN); // add to beginning
    } else if (sign === -1) {
      removedN = arr.shift(); // remove from beginning
      arr.push(removedN); // add to end
    } else {
      // zero and do nothing
      console.log('zero');
    }
  }

  return arr;
};

// Tests

console.log(
  rotateArray([0, 1, 2, 3, 4, 5, 7, 9], 12),
  [4, 5, 7, 9, 0, 1, 2, 3]
);
console.log(rotateArray([0, 1, 2, 3, 4, 5, 7, 9], 2), [7, 9, 0, 1, 2, 3, 4, 5]);
console.log(
  rotateArray([0, 1, 2, 3, 4, 5, 7, 9], -2),
  [2, 3, 4, 5, 7, 9, 0, 1]
);
console.log(rotateArray([0, 1, 2, 3, 4, 5, 7, 9], 2), [7, 9, 0, 1, 2, 3, 4, 5]);
console.log(
  rotateArray([1, 20, 36, 40, 55, 57, 59, 77, 85, 99], -4),
  [55, 57, 59, 77, 85, 99, 1, 20, 36, 40]
);
console.log(
  rotateArray([1, 13, 29, 37, 47, 48, 51, 79, 88, 89], -3),
  [37, 47, 48, 51, 79, 88, 89, 1, 13, 29]
);
console.log(
  rotateArray([28, 29, 50, 57, 76, 77, 81, 91], -2),
  [50, 57, 76, 77, 81, 91, 28, 29]
);
console.log(
  rotateArray([1, 11, 17, 29, 52, 62, 88, 92, 93, 99], -1),
  [11, 17, 29, 52, 62, 88, 92, 93, 99, 1]
);
console.log(
  rotateArray([15, 23, 4, 53, 60, 77, 8, 90, 91, 97], 0),
  [15, 23, 4, 53, 60, 77, 8, 90, 91, 97]
);
console.log(
  rotateArray([14, 17, 36, 43, 46, 5, 63, 68, 96], 1),
  [96, 14, 17, 36, 43, 46, 5, 63, 68]
);
console.log(
  rotateArray([12, 17, 2, 22, 3, 45, 68, 7, 86], 2),
  [7, 86, 12, 17, 2, 22, 3, 45, 68]
);
console.log(
  rotateArray([19, 22, 29, 5, 58, 61, 67, 75, 79, 93], 5),
  [61, 67, 75, 79, 93, 19, 22, 29, 5, 58]
);
console.log(
  rotateArray([19, 22, 29, 5, 58, 61, 67, 75, 79, 93], 18),
  [29, 5, 58, 61, 67, 75, 79, 93, 19, 22]
);
