// https://edabit.com/challenge/rms6xusZ3QeurapAW

// Not my solution
const recurAdd = (arr, sum = 0) => {
  if (arr.length == 0) return sum;
  return recurAdd(arr.slice(1), sum + arr[0]);
};

// Tests

const recursive = (f) =>
  (`${f}`.match(RegExp(`${f.name}`, 'gm')) || []).length > +/function/.test(f);
console.log(recursive(recurAdd), false, 'Recursion is required!');

let [numVector, resVector] = [
  [
    [1, 2, 3, 4, 10, 11],
    [-3, 4, 11, 10, 21, 32, -9],
    [3, 7, -3, -7, 4, 6, -4, -6],
    [-21, -7, 19, 3, 4, -8],
    [],
    [16],
  ],
  [31, 66, 0, -10, 0, 16],
];

for (let i in numVector) console.log(recurAdd(numVector[i]), resVector[i]);
