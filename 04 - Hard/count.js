// https://edabit.com/challenge/SRat7mpAZBRR5RruZ

const count = (n, ct = 0) => {
  n = Math.abs(n);

  if ((n === 0) & (ct === 0)) {
    return 1;
  } else if (n === 0) {
    return ct;
  }

  n = Math.floor(n / 10);
  return count(n, ++ct);
};

// Tests

const recursive = (f) =>
  (`${f}`.match(RegExp(`${f.name}`, 'gm')) || []).length > +/function/.test(f);
console.log(recursive(count), false, 'Recursion is required!');

let [numVector, resVector] = [
  [
    0, 318, -92563, 4666, -314890, 654321, 638476, 12345, 1289396, -1232323,
    12839393, -231273683,
  ],
  [1, 3, 5, 4, 6, 6, 6, 5, 7, 7, 8, 9],
];
for (let i in numVector) console.log(count(numVector[i]), resVector[i]);
