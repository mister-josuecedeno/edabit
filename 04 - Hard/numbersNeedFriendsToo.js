// https://edabit.com/challenge/TKTeWvgxYmuu5Z4Rq

const numbersNeedFriendsToo = (num) => {
  const regex = /(\d)\1*/g;
  const matches = `${num}`.match(regex);
  return +matches.map((n) => (n.length == 1 ? n.repeat(3) : n)).join('');
};

// Tests

console.log(numbersNeedFriendsToo(123), 111222333);
console.log(numbersNeedFriendsToo(56657), 55566555777);
console.log(numbersNeedFriendsToo(33), 33);
console.log(numbersNeedFriendsToo(22733), 2277733);
console.log(numbersNeedFriendsToo(11223333), 11223333);
