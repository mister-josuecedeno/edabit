// https://edabit.com/challenge/qMcdtSKAPESJWKpzP

const prioritySort = (arr, s) => {
  const inArray = arr.filter((n) => s.has(n)).sort((a, b) => a - b);
  const notInArray = arr.filter((n) => !s.has(n)).sort((a, b) => a - b);
  return [...inArray, ...notInArray];
};

// Tests

console.log(prioritySort([5, 4, 3, 2, 1], new Set([2, 3])), [2, 3, 1, 4, 5]);
console.log(prioritySort([], new Set([2, 3])), []);
console.log(prioritySort([], new Set()), []);
console.log(prioritySort([1, 2, 3], new Set()), [1, 2, 3]);
console.log(prioritySort([5, 4, 3, 2, 1], new Set([3, 6])), [3, 1, 2, 4, 5]);
console.log(
  prioritySort([-5, -4, -3, -2, -1, 0], new Set([-4, -3])),
  [-4, -3, -5, -2, -1, 0]
);
