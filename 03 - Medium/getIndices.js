const getIndices = (arr, el) => {
  const indices = [];

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === el) indices.push(i);
  }

  return indices;
}

// Tests

console.log(getIndices(['a', 'a', 'b', 'a', 'b', 'a'], 'a'), [0, 1, 3, 5])
console.log(getIndices([1, 5, 5, 2, 7], 7), [4])
console.log(getIndices([1, 5, 5, 2, 7], 5),[1, 2])
console.log(getIndices([1, 5, 5, 2, 7], 8), [])
console.log(getIndices([8, 8, 8, 8, 8], 8), [0, 1, 2, 3, 4])
console.log(getIndices([8, 8, 7, 8, 8], 8), [0, 1, 3, 4])
console.log(getIndices([true, false, true, false], true), [0, 2])
console.log(getIndices([true, false, true, false], false), [1, 3])
