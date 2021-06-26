const expandedForm = (n) => {
  const len = `${n}`.length - 1;
  const nums = [];

  for (let i = len; i >= 0; i--) {
    let pow = Math.pow(10, i);
    let num = n % pow;
    let rem = n - num;

    if (rem !== 0) {
      nums.push(rem);
    }

    n = n - rem;
  }

  return nums.join(' + ');
};

// Tests
console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');
console.log(expandedForm(1037903), '1000000 + 30000 + 7000 + 900 + 3');
console.log(expandedForm(802539), '800000 + 2000 + 500 + 30 + 9');
console.log(expandedForm(3307098), '3000000 + 300000 + 7000 + 90 + 8');
console.log(
  expandedForm(2736692),
  '2000000 + 700000 + 30000 + 6000 + 600 + 90 + 2'
);
console.log(expandedForm(5030708), '5000000 + 30000 + 700 + 8');
console.log(expandedForm(903305), '900000 + 3000 + 300 + 5');
console.log(expandedForm(2900837), '2000000 + 900000 + 800 + 30 + 7');
console.log(expandedForm(607805), '600000 + 7000 + 800 + 5');
console.log(expandedForm(2070504), '2000000 + 70000 + 500 + 4');
console.log(expandedForm(700681), '700000 + 600 + 80 + 1');
console.log(expandedForm(70903), '70000 + 900 + 3');
