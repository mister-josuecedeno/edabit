const binary = (arr, n) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (start <= end) {
    if (arr[middle] === n) return middle;
    if (arr[middle] < n) start = middle + 1;
    if (arr[middle] > n) end = middle - 1;

    middle = Math.floor((start + end) / 2);
  }

  return -1;
};

// Test

console.log(binary([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2), 2);
console.log(
  binary(
    [
      176, 188, 199, 200, 210, 222, 1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120,
      133, 155, 162,
    ],
    107
  ),
  15
);
console.log(binary([1, 1, 1, 3, 3, 5, 6, 7, 8, 9], 5), 5);
console.log(binary([1, 3, 3, 4, 4, 6, 6, 7, 7, 9], 8), -1);
console.log(binary([0, 1, 2, 3, 4, 5, 6, 7, 9], 6), 6);
console.log(
  binary(
    [
      10, 17, 21, 27, 31, 32, 4, 42, 44, 45, 55, 57, 57, 60, 69, 72, 74, 79, 88,
      89, 91, 96,
    ],
    44
  ),
  8
);
console.log(binary([11, 12, 21, 23, 40, 40, 42, 43, 54, 57, 92], 31), -1);
console.log(
  binary(
    [
      16, 18, 24, 27, 3, 33, 45, 5, 51, 52, 57, 67, 70, 71, 72, 77, 8, 80, 83,
      87, 93, 99,
    ],
    80
  ),
  17
);
console.log(
  binary(
    [
      11, 13, 17, 19, 22, 23, 25, 36, 39, 39, 40, 46, 48, 51, 56, 77, 82, 83,
      87, 89, 91, 98,
    ],
    89
  ),
  19
);
console.log(
  binary(
    [
      11, 18, 27, 32, 36, 39, 42, 48, 58, 6, 6, 60, 64, 67, 67, 74, 77, 82, 88,
      89, 92, 95,
    ],
    37
  ),
  -1
);
// console.log(
//   binary(
//     [
//       16, 23, 31, 35, 48, 56, 6, 66, 68, 69, 80, 82, 82, 86, 9, 91, 92, 93, 94,
//       96, 97, 99,
//     ],
//     59
//   ),
//   -1
// );
// console.log(
//   binary(
//     [
//       10, 13, 2, 22, 25, 27, 43, 44, 46, 47, 47, 51, 69, 78, 79, 83, 85, 85, 86,
//       90, 96, 98, 99,
//     ],
//     54
//   ),
//   -1
// );
// console.log(binary([0, 1, 2, 3, 4, 5, 6, 7, 9], 2), 2);
