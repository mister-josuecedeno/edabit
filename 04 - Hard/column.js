// https://edabit.com/challenge/bqJmJxZYgkRKrLq7v

function column(name) {
  let column = 0;
  let length = name.length;
  for (let i = 0; i < length; i++) {
    column *= 26;
    column += name.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
  }
  return column;
}

// Tests
console.log(column('A'), 1);
console.log(column('B'), 2);
console.log(column('Z'), 26);
console.log(column('AA'), 27);
console.log(column('BA'), 53);
console.log(column('BB'), 54);
console.log(column('CW'), 101);
console.log(column('DD'), 108);
console.log(column('PQ'), 433);
console.log(column('ZZ'), 702);
console.log(column('ABC'), 731);
console.log(column('ZZT'), 18272);
console.log(column('STVW'), 348059);
