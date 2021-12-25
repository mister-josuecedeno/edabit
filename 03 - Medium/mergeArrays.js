const mergeArrays = (a, b) => {
  let maxLength = Math.max(a.length, b.length);
  let aValue, bValue;
  let merged = [];

  for (let i = 0; i < maxLength; i++) {
    aValue = a.shift();
    if (aValue !== undefined) merged.push(aValue);

    bValue = b.shift();
    if (bValue !== undefined) merged.push(bValue);
  }

  return merged;
}

// Tests

console.log(mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]), ["a", 1, "b", 2, "c", 3, "d", 4, "e", 5])
console.log(mergeArrays([1, 2, 3], ["a", "b", "c", "d", "e", "f"]), [1, "a", 2, "b", 3, "c", "d", "e", "f"])
console.log(mergeArrays(["f", "d", "w", "t"], [5, 3, 7, 8]), ["f", 5, "d", 3, "w", 7, "t", 8])
console.log(mergeArrays([4, 54, 7, 87], ["t", "d", "t"]), [4, "t", 54, "d", 7, "t", 87])
console.log(mergeArrays(["c"], [3]), [ "c", 3 ])
console.log(mergeArrays([4, 3, 2, 1], ["r", "d"]), [ 4, "r", 3, "d", 2, 1 ])
console.log(mergeArrays(["u", "k", "c"], [2, 8, 30]), ["u", 2, "k", 8, "c", 30])
console.log(mergeArrays(["e"], [1, 2, 3, 4, 5, 6, 7]), ["e", 1, 2, 3, 4, 5, 6, 7])
console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7], ["e"]), [1, "e", 2, 3, 4, 5, 6, 7])
console.log(mergeArrays([123, 456], ["c", "b", "a"]), [123, "c", 456, "b", "a"])
