const perfectRoots = (n) => {
  let square = n;

  for (let i = 0; i < 3; i++) {
    square = Math.sqrt(n);
    if (!Number.isInteger(square)) return false;
  }

  return true;
};

// Tests

console.log(perfectRoots(256), true);
console.log(perfectRoots(1000), false);
console.log(perfectRoots(6561), true);
console.log(perfectRoots(12534), false);
console.log(perfectRoots(3455), false);
console.log(perfectRoots(65536), true);
console.log(perfectRoots(390625), true);
console.log(perfectRoots(1679616), true);
console.log(perfectRoots(6534561), false);
console.log(perfectRoots(253456), false);
console.log(perfectRoots(5764801), true);
console.log(perfectRoots(100000000), true);
