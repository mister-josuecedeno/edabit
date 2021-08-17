const howMuchMega = (n) => {
  let num = Math.abs(parseInt(n));

  if (n > Number.MAX_SAFE_INTEGER) {
    num = BigInt(n);
  }

  let repeat = `${num}`.length - 2;
  return (repeat < 1 ? 'not a mega ' : 'MEGA '.repeat(repeat)) + 'milestone';
};

// tests

console.log(howMuchMega(54), 'not a mega milestone');
console.log(howMuchMega(143), 'MEGA milestone');
console.log(howMuchMega(1000), 'MEGA MEGA milestone');
console.log(howMuchMega(9999.9), 'MEGA MEGA milestone');
console.log(howMuchMega(-9999.9), 'MEGA MEGA milestone');
console.log(howMuchMega(10000), 'MEGA MEGA MEGA milestone');
console.log(howMuchMega(710005), 'MEGA MEGA MEGA MEGA milestone');
console.log(howMuchMega(0), 'not a mega milestone');
console.log(howMuchMega(387482), 'MEGA MEGA MEGA MEGA milestone');
console.log(
  howMuchMega(20850088393226388232424),
  'MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA milestone'
);
