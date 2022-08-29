// https://edabit.com/challenge/BZgdHtDMnQQRkvFTT

// Not my solution
/*
1. No factorial is going to have fewer zeros than the factorial 
of a smaller number.

2. Each multiple of 5 adds a 0, so first we count how many multiples of 5 are
  smaller than `n` (`n / 5`).

3. Each multiple of 25 adds two 0's, so next we add another 0 for each 
  multiple of 25 smaller than n.

4. We continue on for all powers of 5 smaller than (or equal to) n.
*/

const trailingZeros = (n) => (n < 5 ? 0 : ((n / 5) ^ 0) + trailingZeros(n / 5));

// Tests

console.log(trailingZeros(0), 0, 'Testing with n = 0');
console.log(trailingZeros(6), 1, 'Testing with n = 6');
console.log(trailingZeros(30), 7, 'Testing with n = 30');
console.log(trailingZeros(100), 24, 'Testing with n = 100');
console.log(trailingZeros(1000), 249, 'Testing with n = 1000');
console.log(trailingZeros(100000), 24999, 'Testing with n = 100000');
console.log(
  trailingZeros(1000000000),
  249999998,
  'Testing with n = 1000000000'
);
