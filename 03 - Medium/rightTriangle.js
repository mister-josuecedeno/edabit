const rightTriangle = (x, y, z) => {
  if ([x, y, z].some((n) => n <= 0)) return false;
  const isRightX = x * x === y * y + z * z;
  const isRightY = y * y === x * x + z * z;
  const isRightZ = z * z === x * x + y * y;
  return isRightX || isRightY || isRightZ;
};

// Tests

console.log(rightTriangle(3, 4, 5), true);
console.log(rightTriangle(145, 105, 100), true);
console.log(rightTriangle(70, 130, 110), false);
console.log(rightTriangle(60, 60, 60), false);
console.log(
  rightTriangle(0, 4, 4),
  false,
  "A triangle can't have an edge of length 0."
);
console.log(
  rightTriangle(-3, 4, 5),
  false,
  "A triangle can't have edges of negative length."
);
console.log(rightTriangle(115, 277, 252), true);
console.log(rightTriangle(140, 170, 220), false);
console.log(rightTriangle(915, 1748, 1973), true);
