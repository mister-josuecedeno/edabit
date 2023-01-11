// https://edabit.com/challenge/nLiY7c7S6aPwpB989

// Refactor: Need to account for a letter being duplicated
const findTheDifference = (s, t) => {
  console.log([s, t]);
  const arr = [...t];
  const result = [];

  for (const c of arr) {
    if (![...s].includes(c)) result.push(c);
  }

  return result;
};

// Tests

const deepCopy = (x) => {
  let z, k, v;
  if (typeof x !== 'object' || x === null) return x;
  z = Array.isArray(x) ? [] : {};
  for (k in x) {
    v = x[k];
    z[k] = deepCopy(v);
  }
  return z;
};

const clone = (x) => x.map((e) => (Array.isArray(e) ? clone(e) : e));

const shuffle = (r) => {
  for (let i = r.length - 1, t, k; i > 0; i--) {
    [t, k] = [r[i], Math.floor(Math.random() * (i + 1))];
    r[i] = r[k];
    r[k] = t;
  }
};

const randInt = (n, x) => Math.floor(Math.random() * (x - n + 1)) + n;

let [actualParam, expectedParam] = [
  [
    ['bcefg', 'bcdefg'],
    ['bcdfg', 'bcdefg'],
    ['aiou', 'aeiou'],
    ['mnoqrst', 'mnopqrst'],
    ['rsuvw', 'rstuvw'],
    ['abcd', 'abcde'],
    ['rt', 'rst'],
    ['gjklmn', 'ghjklmn'],
    ['ae', 'aea'],
  ],
  ['d', 'e', 'e', 'p', 't', 'e', 's', 'h', 'a'],
];
for (let i in actualParam)
  console.log(findTheDifference(...actualParam[i]), expectedParam[i]);

for (let i = 0; i < 12; i++) {
  let [x, y] = [[], []];
  for (let k = 0; k < randInt(5, 7); k++)
    x[k] = String.fromCharCode(randInt(97, 122));
  let a = String.fromCharCode(randInt(97, 122));
  y = [...clone(x), a];
  shuffle(y);
  shuffle(x);
  console.log(findTheDifference(x.join(''), y.join('')), a);
}
