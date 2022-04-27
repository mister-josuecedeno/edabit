const isShapePossible = (n, angles) => {
  if (angles.length < 3) return false;
  if (angles.some((a) => a > 180 || a <= 0)) return false;
  const sumAngles = angles.reduce((acc, cv) => acc + cv, 0);
  return sumAngles % 180 === 0;
};

// Tests

console.log(isShapePossible(4, [90, 90, 90, 90]), true);
console.log(isShapePossible(3, [20, 20, 140]), true);
console.log(
  isShapePossible(1, [21]),
  false,
  'Remember not to allow shapes with under 3 sides'
);
console.log(isShapePossible(5, [100, 100, 100, 200, 40]), false);
console.log(
  isShapePossible(7, [830, 20, 20, 10, 10, 5, 5]),
  false,
  'Angles cannot be larger than 180'
);
console.log(isShapePossible(4, [90, 90, 90, 89]), false);
console.log(isShapePossible(2, [21, 78]), false);
console.log(isShapePossible(8, [135, 135, 135, 135, 135, 135, 135, 135]), true);
console.log(isShapePossible(5, [500, 10, 10, 10, 10]), false);
console.log(isShapePossible(10, [21, 12, 333, 2, 2532, 52, 2, 2, 1, 8]), false);
console.log(isShapePossible(5, [108, 108, 108, 108, 108]), true);
console.log(
  isShapePossible(3, [180, 0, 0]),
  false,
  'Angles cannot be equal to 0°'
);
console.log(
  isShapePossible(4, [180, 180, -10, 10]),
  false,
  'Angles cannot be lower than 0°'
);
