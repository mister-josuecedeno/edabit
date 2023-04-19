// https://edabit.com/challenge/9ahp527hHdHwXy7H9

// If same, return same letter, else return missing rgb
const getMissingLetter = (rgb) => {
  const letters = ['R', 'G', 'B'];
  const arr = rgb.split('');
  const same = arr[0] == arr[1];
  const missing = letters.filter((l) => !arr.includes(l))[0];
  return same ? arr[0] : missing;
};

// Check touching letter, return the missing letters rgb
const getNewRow = (rgb) => {
  const arr = rgb.split('');
  let newRow = '';

  for (let i = 0; i < arr.length - 1; i++) {
    let letters = `${arr[i]}${arr[i + 1]}`;
    newRow += getMissingLetter(letters);
  }
  return newRow;
};

// Evaluate rgb until only a single rgb (length = 1)
const colouredTriangle = (rgb) => {
  if (rgb.length === 1) return rgb;
  return colouredTriangle(getNewRow(rgb));
};

// Tests

console.log(colouredTriangle('GB'), 'R');
console.log(colouredTriangle('RRR'), 'R');
console.log(colouredTriangle('RGBG'), 'B');
console.log(colouredTriangle('RBRGBRB'), 'G');
console.log(colouredTriangle('RBRGBRBGGRRRBGBBBGG'), 'G');
console.log(colouredTriangle('B'), 'B');
