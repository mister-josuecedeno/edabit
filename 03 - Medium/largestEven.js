const largestEven = (arr, n = -1) => {
  if (arr.length === 0) return n;

  let first = arr.shift();

  if (first % 2 === 0 && first > n) {
    return largestEven(arr, first);
  } else {
    return largestEven(arr, n);
  }
};

// Tests
console.log(largestEven([3, 7, 2, 1, 7, 9, 10, 13]), 10);
console.log(largestEven([1]), -1);
console.log(largestEven([22]), 22);
console.log(largestEven([13, 5, 7, 9]), -1);
console.log(largestEven([3, 19, 18973623, 2]), 2);
