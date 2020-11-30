// Create a function that takes two inputs: idx (an array of integers) and str (a string).
// The function should return another string with the letters of str at each index in idx in order.

const indexFilter = (idx, str) => {
  let newStr = '';
  let index = 0;

  for (let n of idx) {
    index = n < 0 ? str.length + n : n;
    newStr += str.charAt(index);
  }
  return newStr.toLowerCase();
};

// Test
let testVector = [
  [[[2, 3, 8, 11], 'Autumn in New York'], 'tune'],
  [[[0, 1, 5, 7, 4, 2], 'Cry me a river'], 'creamy'],
  [
    [
      [9, -9, 2, 27, 36, 6, 5, 13, -1, 2, 0, 30, 2],
      "That's life, I've got you under my skin",
    ],
    'frank sinatra',
  ],
  [[[-1, 8, 8, 3], 'Dream a Little Dream of Me'], 'ella'],
];
for (let [[idxVector, strVector], resVector] of testVector)
  console.log(indexFilter(idxVector, strVector), resVector);
