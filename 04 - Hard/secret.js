// https://edabit.com/challenge/BFJbFNJv2E8icogRk

// Convert number to array of digits
// https://stackoverflow.com/questions/19182266/how-to-convert-an-integer-into-an-array-of-digits/19182309
// const arrayOfDigits = Array.from(String(numToSeparate), Number);

// Not my solution

function secret(n, s = String(n)) {
  return s[0] ** s[1] - s[0] * s[1];
}

// Tests

console.log(secret(24), 8);
console.log(secret(32), 3);
console.log(secret(23), 2);
console.log(secret(42), 8);
console.log(secret(15), -4);
console.log(secret(32), 3);
console.log(secret(52), 15);
console.log(secret(25), 22);
