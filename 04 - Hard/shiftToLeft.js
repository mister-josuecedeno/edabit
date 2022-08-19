// https://edabit.com/challenge/CNimjGSPT7xmPJuvY

const shiftToLeft = (x, y, value = 1) => {
  if (y === 0) return x * value;
  value = value * 2;
  return shiftToLeft(x, y - 1, value);
};

// High ranking solution
// const shiftToLeft = (x, y) => y ? shiftToLeft(x * 2, y - 1) : x;

// Tests

const opCheck = (f) => !`${f}`.match(RegExp('<<', 'gm'));
const recursive = (f) =>
  (`${f}`.match(RegExp(`${f.name}`, 'gm')) || []).length > +/function/.test(f);

console.log(
  opCheck(shiftToLeft),
  false,
  'The use of left shift operator (<<) is prohibited!'
);
console.log(recursive(shiftToLeft), false, 'Recursion is required!');

let [numVector, resVector] = [
  [
    [5, 2],
    [10, 3],
    [-32, 2],
    [-6, 5],
    [12, 4],
    [46, 6],
    [57, 0],
    [79, 1],
  ],
  [20, 80, -128, -192, 192, 2944, 57, 158],
];
for (let i in numVector)
  console.log(shiftToLeft(...numVector[i]), resVector[i]);
