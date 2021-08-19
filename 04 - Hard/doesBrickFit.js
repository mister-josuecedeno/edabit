// (a,b,c) -- dimensions of the brick
// (w,h) -- dimensions of the hole

const doesBrickFit = (a, b, c, w, h) => {
  let brick = [a, b, c];

  // Find index of first match
  let matchWidth = brick.filter((b) => b <= Math.min(w, h))[0];
  let matchWidthIndex = brick.indexOf(matchWidth);

  // No match
  if (matchWidthIndex === -1) return false;

  // Remove the index found and search the remainder
  brick.splice(matchWidthIndex, 1);
  let matchHeight = brick.filter((b) => b <= Math.max(w, h))[0];

  // Check for second match
  return matchHeight !== undefined;
};

// Tests

console.log(doesBrickFit(1, 1, 1, 1, 1), true, 'cube into square');
console.log(doesBrickFit(1, 2, 1, 1, 1), true);
console.log(doesBrickFit(1, 2, 2, 1, 1), false);
console.log(doesBrickFit(1, 2, 2, 1, 2), true);
console.log(doesBrickFit(1, 2, 2, 2, 1), true);
console.log(doesBrickFit(2, 2, 2, 1, 2), false);
