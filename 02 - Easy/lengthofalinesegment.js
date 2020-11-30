// Write a function that takes coordinates of two points on a two-dimensional plane
// and returns the length of the line segment connecting those two points.

const lineLength = (arr1, arr2) => {
  const [x1, y1] = arr1;
  const [x2, y2] = arr2;
  return +Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)).toFixed(2);
};

console.log(lineLength([15, 7], [22, 11]), 8.06);
console.log(lineLength([0, 0], [0, 0]), 0);
console.log(lineLength([0, 0], [1, 1]), 1.41);
console.log(lineLength([30, 10], [13, -5]), 22.67);
