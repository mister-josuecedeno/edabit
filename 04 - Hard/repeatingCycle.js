// https://edabit.com/challenge/bYK2XtQJRE88b2yQH

const repeatingCycle = (n) => {
  let remainder = 1 % n;
  let position = 0;
  const seen = {}; // Map: remainder → position in the decimal string

  while (remainder !== 0) {
    // If we've seen this remainder before, a cycle starts here
    if (seen.hasOwnProperty(remainder)) {
      const cycleStart = seen[remainder];
      // If the cycle didn't start at the first digit, return -1
      return cycleStart === 0 ? position - cycleStart : -1;
    }

    seen[remainder] = position;
    remainder = (remainder * 10) % n;
    position++;
  }

  // If remainder becomes 0, it's a terminating decimal
  return -1;
}

// Tests

console.log(repeatingCycle(33), 2)
console.log(repeatingCycle(18118), -1)
console.log(repeatingCycle(69), 22)
console.log(repeatingCycle(197), 98)
console.log(repeatingCycle(65), -1)
console.log(repeatingCycle(97), 96)
console.log(repeatingCycle(19), 18)
console.log(repeatingCycle(111), 3)
console.log(repeatingCycle(53), 13)
console.log(repeatingCycle(59), 58)
console.log(repeatingCycle(93), 15)
console.log(repeatingCycle(51), 16)
console.log(repeatingCycle(159), 13)
console.log(repeatingCycle(183), 60)
console.log(repeatingCycle(197), 98)
console.log(repeatingCycle(167), 166)
console.log(repeatingCycle(94), -1)
console.log(repeatingCycle(133), 18)
console.log(repeatingCycle(218713), 9744)
console.log(repeatingCycle(38127), 6230)
console.log(repeatingCycle(431541), 726)
console.log(repeatingCycle(221193), 3510)
console.log(repeatingCycle(1234567), 34020)