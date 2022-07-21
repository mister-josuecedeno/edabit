// Not my solution
const pentagonal = (num) => {
  if (num === 1) return 1;

  return 5 * (num - 1) + pentagonal(num - 1);
};

// Tests

console.log(pentagonal(1), 1);
console.log(pentagonal(3), 16);
console.log(pentagonal(8), 141);
console.log(pentagonal(10), 226);
console.log(pentagonal(15), 526);
console.log(pentagonal(33), 2641);
console.log(pentagonal(43), 4516);
console.log(pentagonal(13), 391);
console.log(pentagonal(50), 6126);
console.log(pentagonal(62), 9456);
console.log(pentagonal(21), 1051);
