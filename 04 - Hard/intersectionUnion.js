// https://edabit.com/challenge/MfAkm7CkWqepAZTBM

const intersectionUnion = (arr1, arr2) => {
  const intersect = [...new Set(arr1.filter((n) => arr2.includes(n)))].sort(
    (a, b) => a - b
  );
  const union = [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
  return [intersect, union];
};

// Tests

console.log(intersectionUnion([1, 2, 3, 4, 4], [4, 5, 9]), [
  [4],
  [1, 2, 3, 4, 5, 9],
]);
console.log(intersectionUnion([1, 2, 3], [4, 5, 6]), [[], [1, 2, 3, 4, 5, 6]]);
console.log(intersectionUnion([1, 1], [1, 1, 1, 1]), [[1], [1]]);
console.log(intersectionUnion([5, 5], [5, 6]), [[5], [5, 6]]);
console.log(intersectionUnion([7, 8, 9, 6], [9, 7, 6, 8]), [
  [6, 7, 8, 9],
  [6, 7, 8, 9],
]);
console.log(intersectionUnion([4, 1, 1, 2], [1, 4, 4, 4, 4, 4, 4]), [
  [1, 4],
  [1, 2, 4],
]);
