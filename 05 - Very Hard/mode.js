const mode = (numbers) => {
  const occur = {};
  const result = [];

  // Count occurrences
  for (let number of numbers) {
    occur[number] = occur[number] + 1 || 1;
  }

  // Convert to array
  const values = Object.entries(occur);
  const max = Math.max(...Object.values(occur));
  const maxes = values.filter(([key, value]) => value === max);
  maxes.forEach((max) => result.push(+max[0]));
  return result;
};

// Tests

console.log(mode([1, 2, 3, 3, 6, 7, 8, 9]), [3]);
console.log(mode([2, 3, 3, 4, 4, 6, 7, 8]), [3, 4]);
console.log(mode([1, 6, 6, 7, 7, 8, 9]), [6, 7]);
console.log(mode([4, 4, 4, 6, 8, 9, 10, 10]), [4]);
console.log(mode([1, 4, 6, 7, 9, 9]), [9]);
console.log(mode([2, 2, 2, 3, 7, 8, 9, 9]), [2]);
console.log(mode([2, 4, 5, 5, 7, 8, 10, 10]), [5, 10]);
console.log(mode([1, 1, 4, 4, 5, 7, 9]), [1, 4]);
console.log(mode([2, 3, 3, 3, 4, 7, 9]), [3]);
console.log(mode([1, 1, 2, 4, 4, 6, 6, 9]), [1, 4, 6]);
console.log(mode([1, 2, 3, 3, 3, 7, 9, 10]), [3]);
console.log(mode([1, 2, 5, 6, 6, 6, 7, 10]), [6]);
console.log(mode([2, 2, 6, 9, 10, 10, 10]), [10]);
console.log(mode([1, 1, 5, 6, 6, 10, 10]), [1, 6, 10]);
console.log(mode([2, 2, 3, 3, 4, 8]), [2, 3]);
console.log(mode([2, 3, 8, 10, 10, 10, 10]), [10]);
console.log(mode([2, 2, 3, 4, 6, 9]), [2]);
console.log(mode([1, 2, 5, 8, 9, 9, 10, 10]), [9, 10]);
console.log(mode([2, 3, 3, 4, 4, 5]), [3, 4]);
console.log(mode([2, 2, 3, 3, 4, 5, 10, 10]), [2, 3, 10]);
console.log(mode([1, 3, 3, 5, 5, 9, 10, 10]), [3, 5, 10]);
