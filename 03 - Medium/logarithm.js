const logarithm = (base, num) => {
  if (base <= 1 || num < 1) return 'Invalid';

  let power = 1;
  let result = base;
  while (result <= num) {
    if (Math.pow(base, power) == num) return power;
    result = Math.pow(base, power);
    power++;
  }

  return 'Invalid';
};

// Tests

console.log(logarithm(7, 49), 2);
console.log(logarithm(12, 144), 2);
console.log(logarithm(2, 4), 2);
console.log(logarithm(7, 49), 2);
console.log(logarithm(5, 9765625), 10);
console.log(logarithm(1, 'Hi,'.length), 'Invalid');
console.log(logarithm(0, 'How'.length), 'Invalid');
console.log(logarithm(-1, 'Are'.length), 'Invalid');
console.log(logarithm('you'.length, 0), 'Invalid');
console.log(logarithm('doing'.length, -1), 'Invalid');
console.log(logarithm('today?'.length, -15), 'Invalid');
