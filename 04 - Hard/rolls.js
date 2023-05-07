// https://edabit.com/challenge/QuhNPjLubRNh2McfX

const rolls = (arr) => {
  const copy = [...arr];
  for (let i = 1; i < arr.length; i++) {
    let previous = arr[i - 1];
    if (previous === 1) copy[i] = 0;
    if (previous === 6) copy[i] = arr[i] * 2;
  }

  return copy.reduce((acc, cv) => acc + cv, 0);
};

// Tests

console.log(rolls([1, 2, 3]), 4);
console.log(rolls([2, 6, 2, 5]), 17);
console.log(rolls([6, 1, 1]), 8);
console.log(rolls([5, 1, 6, 1, 6]), 8);
console.log(rolls([1, 1, 1]), 1);
console.log(rolls([1, 1, 3, 1, 1]), 2);
console.log(rolls([1, 1, 1, 1, 1]), 1);
console.log(rolls([6, 6, 6]), 30);
