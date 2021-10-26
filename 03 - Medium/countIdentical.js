const countIdentical = (arr) => {
  let count = 0;

  for (const el of arr) {
    let first = el[0];
    if (el.every(e => e === first)) count++;
  }
  
  return count;
}

// Tests

console.log(countIdentical([[33, 33], [5], ['a', 'a'], [2, 2, 2], [1, 2, 2], [3, 1]]), 4)
console.log(countIdentical([[1], [2], [3], [4]]), 4)
console.log(countIdentical([[1, 2], [2, 3], [3, 4], [4, 4]]), 1)
console.log(countIdentical([['@', '@', '@', '@'], [2, 3], [3, 4], [4, 4]]), 2)
