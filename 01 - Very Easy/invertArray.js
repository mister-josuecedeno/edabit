const invertArray = (arr) => arr.map((n) => (n === 0 ? n : n * -1));

// tests

console.log(invertArray([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
console.log(invertArray([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
console.log(invertArray([]), []);
console.log(invertArray([0]), [0]);
// Mubashir
