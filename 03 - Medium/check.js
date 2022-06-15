const check = (arr) => {
  const direction = arr.map((n, i, arr) => n < arr[i + 1]).slice(0, -1);
  const increasing = direction.every((b) => b === true);
  const decreasing = direction.every((b) => b === false);
  if (increasing) {
    return 'increasing';
  } else if (decreasing) {
    return 'decreasing';
  } else {
    return 'neither';
  }
};

// Tests

console.log(check([1, 2, 3]), 'increasing');
console.log(check([3, 2, 1]), 'decreasing');
console.log(check([1, 2, 1]), 'neither');
console.log(check([1, 1, 2]), 'neither');
console.log(check([1, 3, 5, 7, 9, 10]), 'increasing');
console.log(check([5, 6, 5, 7, 9, 10]), 'neither');
console.log(check([5, 7]), 'increasing');
console.log(check([9, 7, 1]), 'decreasing');
