// https://edabit.com/challenge/7bJApSrKyv72yWa2d

const isZygodrome = (num) => {
  const str = `${num}`;
  const regex = /(\d)\1*/g;
  return str.match(regex).every((n) => n.length > 1);
};

// Tests

console.log(isZygodrome(11), true);
console.log(isZygodrome(222), true);
console.log(isZygodrome(223), false);
console.log(isZygodrome(1001), false);
console.log(isZygodrome(1100), true);
console.log(isZygodrome(11122), true);
console.log(isZygodrome(3344466777), true);
console.log(isZygodrome(33444667778), false);
console.log(isZygodrome(8866611229999), true);
console.log(isZygodrome(9977866655522), false);
console.log(isZygodrome(99999999), true);
console.log(isZygodrome(0), false);
