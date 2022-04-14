const centroid = (x1, y1, x2, y2, x3, y3) => {
  if (y2 * x3 == y3) return false;
  const x = (x1 + x2 + x3) / 3;
  const y = (y1 + y2 + y3) / 3;
  return [+x.toFixed(2), +y.toFixed(2)];
};

// Tests

console.log(centroid(0, 0, 3, 0, 3, 3), [2.0, 1.0]);
console.log(centroid(5, 3, -3, -2, -1, 4), [0.33, 1.67]);
console.log(centroid(2, 2, 8, -2, 0, -3), [3.33, -1.0]);
console.log(centroid(5, 3, 5, -1, -4, 1), [2.0, 1.0]);
console.log(centroid(-1, -3, 1, 3, 2, 6), false);
console.log(centroid(3, 0, 0, 3, 6, 3), [3.0, 2.0]);
