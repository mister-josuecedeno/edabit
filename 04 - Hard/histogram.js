const histogram = (arr, char) => {
  return arr.map((l) => `${char}`.repeat(l)).join('\n');
};

// Tests

console.log(histogram([2, 4, 5, 6], 'o'), 'oo\noooo\nooooo\noooooo');
console.log(histogram([4, 2], '*'), '****\n**');
console.log(
  histogram([20, 1, 12], 'H'),
  'HHHHHHHHHHHHHHHHHHHH\nH\nHHHHHHHHHHHH'
);
console.log(
  histogram([2, 1, 2, 4, 5, 2, 3], '#'),
  '##\n#\n##\n####\n#####\n##\n###'
);
