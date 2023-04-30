// https://edabit.com/challenge/fiXLsemkYTK9oKuDC

const expand = (num) => {
  const len = `${num}`.length;
  const expanded = [];

  for (let i = len; i > 0; i--) {
    let pow = Math.pow(10, len - 1);
    console.log(pow);
  }

  return;
};

// Tests

console.log(expand(13), '10 + 3');
console.log(expand(86), '80 + 6');
console.log(expand(17000000), '10000000 + 7000000');
console.log(
  expand(420370022),
  '400000000 + 20000000 + 300000 + 70000 + 20 + 2'
);
console.log(expand(70304), '70000 + 300 + 4');
console.log(expand(9000000), '9000000');
console.log(expand(5325), '5000 + 300 + 20 + 5');
console.log(
  expand(2096039485293),
  '2000000000000 + 90000000000 + 6000000000 + 30000000 + 9000000 + 400000 + 80000 + 5000 + 200 + 90 + 3'
);
console.log(
  expand(92093403034573),
  '90000000000000 + 2000000000000 + 90000000000 + 3000000000 + 400000000 + 3000000 + 30000 + 4000 + 500 + 70 + 3'
);
