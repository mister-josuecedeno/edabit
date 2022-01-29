// Not my solution
function fractionHalf(fraction) {
  const [n, d] = fraction.split('/');
  return n % 2 === 0 ? `${n / 2}/${d}` : `${n}/${d * 2}`;
}

// Tests

console.log(fractionHalf('1/2'), '1/4');
console.log(fractionHalf('2/3'), '1/3');
console.log(fractionHalf('3/8'), '3/16');
console.log(fractionHalf('39/46'), '39/92');
console.log(fractionHalf('52/97'), '26/97');
