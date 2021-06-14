const check = (arr) => {
  // Is it rotated?
  const max = Math.max(...arr);
  const maxIndex = arr.indexOf(max);

  const min = Math.min(...arr);
  const minIndex = arr.indexOf(min);

  const isRotated = minIndex === maxIndex + 1;

  if (!isRotated) return 'NO';

  // Is it sorted?
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1] && arr[i] !== max) {
      return 'NO';
    }
  }

  return 'YES';
};

// Tests
console.log(check([3, 4, 5, 1, 2]), 'YES');
console.log(check([1, 2, 3]), 'NO');
console.log(check([7, 9, 11, 12, 5]), 'YES');
console.log(check([13, 22, 34, 1, 11]), 'YES');
console.log(check([5, 3, 4, 1]), 'NO');
console.log(check([100, 120, 130, 50, 120, 111]), 'NO');
