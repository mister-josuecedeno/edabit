// https://edabit.com/challenge/nbLgTS3tCHTJcQfA5

const halveCount = (a, b) => (a > b ? 1 + halveCount(a / 2, b) : -1);

// Tests

const isRecursive = (f) =>
  (`${f}`.match(RegExp(`${f.name}`, 'gm')) || []).length > +/function/.test(f);
console.log(isRecursive(halveCount), false, 'Recursion is required!');

let [actualParam, expectedParam] = [
  [
    [4666, 544],
    [466, 54],
    [8, 2],
    [1891, 4],
    [1756, 14],
    [7764, 2],
    [1118, 47],
    [161, 79],
    [8573, 35],
    [4123, 1],
    [1348, 60],
    [7549, 31],
    [4469, 5],
    [1123, 98],
    [8197, 85],
    [1199, 56],
    [8845, 4],
    [606, 67],
    [3375, 6],
    [7085, 10],
    [299, 5],
    [1208, 82],
    [3635, 73],
    [2382, 3],
    [320, 80],
  ],
  [
    3, 3, 1, 8, 6, 11, 4, 1, 7, 12, 4, 7, 9, 3, 6, 4, 11, 3, 9, 9, 5, 3, 5, 9,
    1,
  ],
];
for (let i in actualParam)
  console.log(halveCount(...actualParam[i]), expectedParam[i]);
