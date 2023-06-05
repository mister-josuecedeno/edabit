// https://edabit.com/challenge/N7p2XeHgkXejEgoap

// not my solution
function seqLevel(arr, level = 0) {
  if (arr[1] - arr[0] === arr[2] - arr[1])
    return ['Linear', 'Quadratic', 'Cubic'][level];
  else
    return seqLevel(
      arr.slice(1).map((v, i) => v - arr[i]),
      level + 1
    );
}

// Tests

console.log(seqLevel([1, 2, 3, 4, 5]), 'Linear');
console.log(seqLevel([2, 1, 0, -1, -2]), 'Linear');
console.log(seqLevel([3, 6, 10, 15, 21]), 'Quadratic');
console.log(seqLevel([4, 9, 16, 25, 36]), 'Quadratic');
console.log(seqLevel([7, 17, 31, 49, 71]), 'Quadratic');
console.log(seqLevel([2, 10, 26, 50, 82]), 'Quadratic');
console.log(seqLevel([-6, -4, 10, 42, 98, 184]), 'Cubic');
console.log(seqLevel([17, 59, 143, 287, 509, 827]), 'Cubic');
