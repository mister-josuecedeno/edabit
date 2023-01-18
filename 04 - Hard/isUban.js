// https://edabit.com/challenge/GZkdz9WEeHSBy2ScE

const isUban = (num) => {
  if (num === 40) return true;
  if (num <= 99) {
    return !num.toString().split('').includes('4');
  }
  if (num > 99 && num < 1000000) return false;
  if (num >= 1000000) return isUban(num % 1000000);
};

// Tests

console.log(isUban(0), true);
console.log(isUban(24), false);
console.log(isUban(223), false);
console.log(isUban(2051), false);
console.log(isUban(627), false);
console.log(isUban(6258), false);
console.log(isUban(12), true);
console.log(isUban(202), false);
console.log(isUban(98), true);
console.log(isUban(6592), false);
console.log(isUban(393), false);
console.log(isUban(1000096), true);
console.log(isUban(40), true);
