// Given a list of directions to spin, "left" or "right",
// return an integer of how many full 360° rotations were made.
// Note that each word in the array counts as a 90° rotation in that direction.

// Solution

const spinAround = (arr) => {
  let right = arr.filter((el) => el === 'right').length || 0;
  let left = arr.filter((el) => el === 'left').length || 0;
  return Math.floor(Math.abs((right * 90 - left * 90) / 360));
};

// Tests

console.log(spinAround(['left', 'right', 'left', 'right']), 0);
console.log(
  spinAround([
    'right',
    'right',
    'right',
    'right',
    'right',
    'right',
    'right',
    'right',
  ]),
  2
);
console.log(spinAround(['left', 'left', 'left', 'left']), 1);
console.log(spinAround([]), 0);
