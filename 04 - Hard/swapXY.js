// https://edabit.com/challenge/tu8YN5dpi56vWozDS

const swapXY = (str) => {
  const regex = /-?\d+/g;
  const nums = str.match(regex);
  return `(${nums[1]}, ${nums[0]}), (${nums[3]}, ${nums[2]})`;
};

// Tests
console.log(swapXY('(1, 2), (3, 4)'), '(2, 1), (4, 3)');
console.log(swapXY('(11, 23), (43, 99)'), '(23, 11), (99, 43)');
console.log(swapXY('(-5, -3), (7, 4)'), '(-3, -5), (4, 7)');
console.log(swapXY('(-1095, -321), (0, -88)'), '(-321, -1095), (-88, 0)');
