// https://edabit.com/challenge/KNjaveTsz3PQiHa8w

const piratesKilled = (gold, tolerance) => {
  return gold.some((g, i) => Math.max(...gold) - g > tolerance[i]);
};

// Tests

console.log(piratesKilled([3, 5, 8, 3, 4], [10, 4, 2, 5, 5]), false);
console.log(piratesKilled([3, 5, 8, 3, 4], [10, 4, 2, 5, 1]), true);
console.log(piratesKilled([3, 3, 10], [7, 7, 0]), false);
console.log(piratesKilled([3, 3, 10], [6, 6, 0]), true);
console.log(piratesKilled([3, 3, 3], [0, 0, 0]), false);
console.log(piratesKilled([3, 3, 4, 4], [0, 0, 1, 1]), true);
console.log(piratesKilled([3, 3, 4, 4], [1, 1, 0, 0]), false);
console.log(piratesKilled([3, 3, 4, 4], [0, 0, 0, 1]), true);
console.log(piratesKilled([3, 3, 4, 4, 5], [0, 0, 0, 1, 1]), true);
