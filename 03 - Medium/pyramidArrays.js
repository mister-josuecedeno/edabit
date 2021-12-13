const pyramidArrays = (n) => {
  const result = [];

  for (let i = 1; i <= n; i++) {
    result.push(Array(i).fill(i));
  }

  return result ;
}

// Tests

console.log(pyramidArrays(1), [[1]])
console.log(pyramidArrays(2), [[1], [2, 2]])
console.log(pyramidArrays(3), [[1], [2, 2], [3, 3, 3]])
console.log(pyramidArrays(4), [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4]])
console.log(pyramidArrays(5), [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]])
console.log(pyramidArrays(6), [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [6, 6, 6, 6, 6, 6]])
console.log(pyramidArrays(7), [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [6, 6, 6, 6, 6, 6], [7, 7, 7, 7, 7, 7, 7]])
console.log(pyramidArrays(8), [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [6, 6, 6, 6, 6, 6], [7, 7, 7, 7, 7, 7, 7], [8, 8, 8, 8, 8, 8, 8, 8]])
console.log(pyramidArrays(9), [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [6, 6, 6, 6, 6, 6], [7, 7, 7, 7, 7, 7, 7], [8, 8, 8, 8, 8, 8, 8, 8], [9, 9, 9, 9, 9, 9, 9, 9, 9]])

