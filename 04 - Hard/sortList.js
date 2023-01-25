// https://edabit.com/challenge/qrb9Xaapq9b8nstLe

const sortList = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).sort((a, b) => {
      if (a[0] > b[0]) return -1;
      if (a[0] < b[0]) return 1;
      return 0;
    })
  );
};

// Tests

const random = Math.random();
const obj = {
  c: 100,
  a: 50,
  b: 10,
  d: 50,
};
const obj2 = { ab: 10, ac: 10, ad: 10 };
const obj3 = { piano: random, stereo: 10, suitcase: 1 };

console.log(sortList(obj), { d: 50, c: 100, b: 10, a: 50 });
console.log(sortList(obj2), { ad: 10, ac: 10, ab: 10 });
console.log(sortList(obj3), { suitcase: 1, stereo: 10, piano: random });
