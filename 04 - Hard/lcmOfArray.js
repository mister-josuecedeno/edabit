// https://edabit.com/challenge/qmQ9kRz6ZbkL4hi5F

// Source: https://stackoverflow.com/questions/34953778/calculate-the-lcm-of-two-or-three-numbers-in-javascript

function gcd2(a, b) {
  // Greatest common divisor of 2 integers
  if (!b) return b === 0 ? a : NaN;
  return gcd2(b, a % b);
}

function lcm2(a, b) {
  // Least common multiple of 2 integers
  return (a * b) / gcd2(a, b);
}
function lcmOfArray(array) {
  // Least common multiple of a list of integers
  var n = 1;
  for (var i = 0; i < array.length; ++i) n = lcm2(array[i], n);
  return n;
}

// Tests

console.log(lcmOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 2520);
console.log(lcmOfArray([13, 6, 17, 18, 19, 20, 37]), 27965340);
console.log(lcmOfArray([44, 64, 12, 17, 65]), 2333760);
console.log(lcmOfArray([200, 30, 18, 11, 8, 64, 34]), 2692800);
