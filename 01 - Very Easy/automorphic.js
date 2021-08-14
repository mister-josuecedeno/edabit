const automorphic = (n) => {
  let length = `${n}`.length;
  return Math.pow(n, 2) % Math.pow(10, length) === n;
};

// Tests

console.log(automorphic(1), true);
console.log(automorphic(3), false);
console.log(automorphic(6), true);
console.log(automorphic(9), false);
console.log(automorphic(25), true);
console.log(automorphic(53), false);
console.log(automorphic(76), true);
console.log(automorphic(95), false);
console.log(automorphic(625), true);
console.log(automorphic(225), false);
