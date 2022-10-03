// https://edabit.com/challenge/NcQg8tCkMecNpjwXc

const balanced = (arr) => {
  const mid = arr.length / 2;

  const first = arr.slice(0, mid);
  const second = arr.slice(-mid);

  const firstSum = first.reduce((acc, cv) => acc + cv, 0);
  const secondSum = second.reduce((acc, cv) => acc + cv, 0);

  if (firstSum === secondSum) {
    return arr;
  } else if (firstSum > secondSum) {
    return [...first, ...first];
  } else {
    return [...second, ...second];
  }
};

// Tests

console.log(balanced([1, 2, 4, 6, 3, 1]), [6, 3, 1, 6, 3, 1]);
console.log(
  balanced([88, 3, 27, 5, 9, 0, 13, 10]),
  [88, 3, 27, 5, 88, 3, 27, 5]
);
console.log(
  balanced([7, 5, 2, 6, 1, 0, 1, 5, 2, 7, 0, 6]),
  [7, 5, 2, 6, 1, 0, 1, 5, 2, 7, 0, 6]
);
console.log(balanced([0, 1, 1, 1]), [1, 1, 1, 1]);
console.log(balanced([100, 55]), [100, 100]);
