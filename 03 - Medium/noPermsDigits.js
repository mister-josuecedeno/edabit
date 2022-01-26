// Not my solution
const factorial = (n) => BigInt(!n) || n * factorial(--n);
const noPermsDigits = (n) => String(factorial(BigInt(n))).length;

// Tests

console.log(noPermsDigits(0), 1);
console.log(noPermsDigits(1), 1);
console.log(noPermsDigits(2), 1);
console.log(noPermsDigits(3), 1);
console.log(noPermsDigits(4), 2);
console.log(noPermsDigits(5), 3);
console.log(noPermsDigits(6), 3);
console.log(noPermsDigits(7), 4);
console.log(noPermsDigits(8), 5);
console.log(noPermsDigits(9), 6);
console.log(noPermsDigits(10), 7);
console.log(noPermsDigits(11), 8);
console.log(noPermsDigits(12), 9);
console.log(noPermsDigits(13), 10);
