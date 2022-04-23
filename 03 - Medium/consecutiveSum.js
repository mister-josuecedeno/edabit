const consecutiveSum = (n) => {
  let start = 1;
  let number = 1;
  let sum = 0;
  let hasConsecutiveSum = false;

  while (start < n) {
    sum += number++;
    if (sum === n) {
      hasConsecutiveSum = true;
      break;
    }

    if (sum > n) {
      sum = 0;
      start++;
      number = start;
    }

    if (start >= n) {
      break;
    }
  }

  return hasConsecutiveSum;
};

// Tests

console.log(consecutiveSum(69), true);
console.log(consecutiveSum(8), false);
console.log(consecutiveSum(57), true);
console.log(consecutiveSum(6), true);
console.log(consecutiveSum(13), true);
console.log(consecutiveSum(16), false);
console.log(consecutiveSum(91), true);
console.log(consecutiveSum(75), true);
console.log(consecutiveSum(38), true);
console.log(consecutiveSum(25), true);
console.log(consecutiveSum(32), false);
console.log(consecutiveSum(65), true);
console.log(consecutiveSum(13), true);
console.log(consecutiveSum(16), false);
console.log(consecutiveSum(99), true);
console.log(consecutiveSum(522), true);
console.log(consecutiveSum(974), true);
console.log(consecutiveSum(755), true);
console.log(consecutiveSum(512), false);
console.log(consecutiveSum(739), true);
console.log(consecutiveSum(1006), true);
console.log(consecutiveSum(838), true);
console.log(consecutiveSum(1092), true);
console.log(consecutiveSum(727), true);
console.log(consecutiveSum(648), true);
console.log(consecutiveSum(1024), false);
console.log(consecutiveSum(851), true);
console.log(consecutiveSum(541), true);
console.log(consecutiveSum(1011), true);
console.log(consecutiveSum(822), true);
console.log(consecutiveSum(382131), true);
console.log(consecutiveSum(118070), true);
console.log(consecutiveSum(17209), true);
console.log(consecutiveSum(32768), false);
console.log(consecutiveSum(161997), true);
console.log(consecutiveSum(400779), true);
console.log(consecutiveSum(198331), true);
console.log(consecutiveSum(325482), true);
console.log(consecutiveSum(88441), true);
console.log(consecutiveSum(648), true);
console.log(consecutiveSum(65536), false);
console.log(consecutiveSum(323744), true);
console.log(consecutiveSum(183540), true);
console.log(consecutiveSum(65271), true);
console.log(consecutiveSum(5263987), true);
