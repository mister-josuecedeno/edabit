// https://edabit.com/challenge/4zCJaqJvEcAmqcb7y

const sortDigits = (nums, dir) => {
  return dir === 'desc'
    ? nums.sort((a, b) => b - a)
    : nums.sort((a, b) => a - b);
};

const reorderDigits = (arr, direction) => {
  return arr.map((n) => +sortDigits([...`${n}`], direction).join(''));
};

// Tests

console.log(
  reorderDigits([515, 341, 98, 44, 211], 'asc'),
  [155, 134, 89, 44, 112]
);
console.log(
  reorderDigits([515, 341, 98, 44, 211], 'desc'),
  [551, 431, 98, 44, 211]
);

console.log(reorderDigits([63251, 78221], 'asc'), [12356, 12278]);
console.log(reorderDigits([63251, 78221], 'desc'), [65321, 87221]);

console.log(reorderDigits([1, 2, 3, 4], 'asc'), [1, 2, 3, 4]);
console.log(reorderDigits([1, 2, 3, 4], 'desc'), [1, 2, 3, 4]);

console.log(reorderDigits([12, 21, 15, 51], 'asc'), [12, 12, 15, 15]);
console.log(reorderDigits([12, 21, 15, 51], 'desc'), [21, 21, 51, 51]);
