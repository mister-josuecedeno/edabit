// Given an array of numbers, representing the height
// of a mountain in certain intervals, return whether
// this mountain is scalable.

// A mountain can be considered scalable if each number
// is within 5 units of the next number in either direction.

// Solutions
const isScalable = (h) => {
  const heights = h.length;
  let next, min, max;
  let scalable = true;

  for (let i = 0; i < heights; i++) {
    next = h[i + 1];
    min = h[i] - 5;
    max = h[i] + 5;

    if (next > max || next < min) return false;
  }

  return scalable;
};

// Tests
console.log(isScalable([1, 2, 4, 6, 7, 8]), true);
console.log(isScalable([40, 45, 50, 48, 47, 52]), true);
console.log(isScalable([2, 9, 11, 10, 18, 21]), false);
console.log(isScalable([200, 200, 200, 200]), true);
console.log(isScalable([30, 29, 24, 19, 16, 11]), true);
console.log(isScalable([22, 22, 22, 29, 29, 29, 29]), false);
