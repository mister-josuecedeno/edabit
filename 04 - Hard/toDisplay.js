// Not my solution. Learning opportunity.

const A = 0b0000001;
const B = 0b0000010;
const C = 0b0000100;
const D = 0b0001000;
const E = 0b0010000;
const F = 0b0100000;
const G = 0b1000000;

const map = new Map([
  [0x0, A | B | C | D | E | F],
  [0x1, B | C],
  [0x2, A | B | D | E | G],
  [0x3, A | B | C | D | G],
  [0x4, B | C | F | G],
  [0x5, A | C | D | F | G],
  [0x6, A | C | D | E | F | G],
  [0x7, A | B | C],
  [0x8, A | B | C | D | E | F | G],
  [0x9, A | B | C | D | F | G],
  [0xa, A | B | C | E | F | G],
  [0xb, C | D | E | F | G],
  [0xc, A | D | E | F],
  [0xd, B | C | D | E | G],
  [0xe, A | D | E | F | G],
  [0xf, A | E | F | G],
]);

const toDisplay = (hexIn) => map.get(hexIn);

// Tests

console.log(toDisplay(0x0), 0x3f); // 0
console.log(toDisplay(0x1), 0x06); // 1 right side
console.log(toDisplay(0x2), 0x5b); // 2
console.log(toDisplay(0x3), 0x4f); // 3
console.log(toDisplay(0x4), 0x66); // 4
console.log(toDisplay(0x5), 0x6d); // 5
console.log(toDisplay(0x6), 0x7d); // 6 top hook
console.log(toDisplay(0x7), 0x07); // 7 no middle slash
console.log(toDisplay(0x8), 0x7f); // 8
console.log(toDisplay(0x9), 0x6f); // 9 bottom hook
console.log(toDisplay(0xa), 0x77); // A Upper case
console.log(toDisplay(0xb), 0x7c); // b lower case
console.log(toDisplay(0xc), 0x39); // C Upper case
console.log(toDisplay(0xd), 0x5e); // d lower case
console.log(toDisplay(0xe), 0x79); // E Upper case
console.log(toDisplay(0xf), 0x71); // F Upper case
