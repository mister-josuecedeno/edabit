// https://edabit.com/challenge/ggDcLksKsBd8xAiFd

// Work in progress > Brute force > Refactor

const getPosition = (start, direction, increment) => {
  direction = direction % 2 ? '+' : '-';
  let position = eval(`${start}${direction}${increment}`);

  if (position < 0) return 100 + position;
  if (position > 99) return 100 - position;

  return position;
};

const safecracker = (start, increments) => {
  const p1 = getPosition(start, 0, increments[0]);
  const p2 = getPosition(p1, 1, increments[1]);
  const p3 = getPosition(p2, 2, increments[2]);
  return [p1, p2, p3];
};

// Tests

// console.log(safecracker(99, [87, 61, 91]), [12, 73, 82]);
// console.log(safecracker(63, [22, 16, 35]), [41, 57, 22]);
// console.log(safecracker(18, [10, 57, 96]), [8, 65, 69]);
// console.log(safecracker(82, [91, 4, 91]), [91, 95, 4]);
// console.log(safecracker(83, [37, 12, 7]), [46, 58, 51]);
console.log(safecracker(31, [44, 86, 23]), [87, 73, 50]);
// console.log(safecracker(96, [47, 76, 89]), [49, 25, 36]);
// console.log(safecracker(82, [41, 5, 66]), [41, 46, 80]);
// console.log(safecracker(31, [59, 79, 99]), [72, 51, 52]);
// console.log(safecracker(67, [71, 93, 93]), [96, 89, 96]);
// console.log(safecracker(95, [14, 35, 34]), [81, 16, 82]);
// console.log(safecracker(77, [73, 98, 55]), [4, 2, 47]);
// console.log(safecracker(78, [86, 4, 40]), [92, 96, 56]);
// console.log(safecracker(0, [21, 94, 92]), [79, 73, 81]);
// console.log(safecracker(45, [63, 96, 30]), [82, 78, 48]);
// console.log(safecracker(98, [25, 93, 94]), [73, 66, 72]);
// console.log(safecracker(27, [64, 25, 63]), [63, 88, 25]);
// console.log(safecracker(52, [6, 81, 49]), [46, 27, 78]);
// console.log(safecracker(56, [70, 88, 70]), [86, 74, 4]);
// console.log(safecracker(85, [25, 24, 73]), [60, 84, 11]);
