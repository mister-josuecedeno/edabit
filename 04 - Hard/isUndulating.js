// https://edabit.com/challenge/sysGYNhR6ZhKBFt9D

const isUndulating = (n) => {
  const str = `${n}`;
  if (str.length < 3) return false;
};

// Tests

console.log(isUndulating(121), true, 'Example #1');
console.log(isUndulating(373737), true, 'Example #2');
console.log(isUndulating(12), false, 'Example #3');
console.log(isUndulating(12122), false, 'Example #4');
console.log(isUndulating(85856), false, 'Example #5');
console.log(isUndulating(949494), true);
console.log(isUndulating(494), true);
console.log(isUndulating(363738), false);
console.log(isUndulating(3663), false);
console.log(isUndulating(81818181), true);
