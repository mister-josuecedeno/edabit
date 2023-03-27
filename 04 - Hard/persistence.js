// https://edabit.com/challenge/hLZPoBBa745aWAsnm

const persistence = (num, ct = 0) => {
  if (num < 10) return ct;
  let newNum = `${num}`.split('').join('*');
  return persistence(eval(newNum), ++ct);
};

// Tests

console.log(persistence(0), 0);
console.log(persistence(10), 1);
console.log(persistence(25), 2);
console.log(persistence(39), 3);
console.log(persistence(77), 4);
console.log(persistence(679), 5);
console.log(persistence(6788), 6);
console.log(persistence(68889), 7);
console.log(persistence(2677889), 8);
console.log(persistence(26888999), 9);
console.log(persistence(3778888999), 10);
console.log(persistence(277777788888899), 11);
