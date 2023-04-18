// https://edabit.com/challenge/9ahp527hHdHwXy7H9

// recursively go through the row until there is a single character
const getMissingLetter = (rgb) => {
  const letters = ['R', 'G', 'B'];
  const arr = rgb.split('');
  const same = arr[0] == arr[1];
  const missing = letters.filter((l) => !arr.includes(l))[0];
  return same ? arr[0] : missing;
};

// console.log(getMissingLetter('GB'));

const colouredTriangle = (row) => {
  return;
};

// Tests

console.log(colouredTriangle('GB'), 'R');
console.log(colouredTriangle('RRR'), 'R');
console.log(colouredTriangle('RGBG'), 'B');
console.log(colouredTriangle('RBRGBRB'), 'G');
console.log(colouredTriangle('RBRGBRBGGRRRBGBBBGG'), 'G');
console.log(colouredTriangle('B'), 'B');
