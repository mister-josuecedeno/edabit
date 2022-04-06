const euclidean = (a, b) =>
  b > a ? euclidean(b, a) : a % b ? euclidean(b, a % b) : b;

// Tests

console.log(euclidean(4, 2), 2);
console.log(euclidean(25, 5), 5);
console.log(euclidean(280, 64), 8);
console.log(euclidean(3, 6), 3);
console.log(euclidean(64, 52), 4);
console.log(euclidean(49, 14), 7);
