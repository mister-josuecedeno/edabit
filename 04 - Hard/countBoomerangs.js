const countBoomerangs = (arr) => {
  let count = 0;
  let first, second, third;
  let isBoomerang = false;

  for (let i = 0; i < arr.length - 2; i++) {
    first = arr[i];
    second = arr[i + 1];
    third = arr[i + 2];

    isBoomerang = first === third && second !== first && second !== third;

    if (isBoomerang) count++;
  }

  return count;
};

// Tests
console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]), 2);
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]), 1);
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]), 0);
console.log(countBoomerangs([5, 9, 5, 9, 5]), 3);
console.log(countBoomerangs([4, 4, 4, 8, 4, 8, 4]), 3);
console.log(countBoomerangs([2, 2, 2, 2, 2, 2, 3]), 0);
console.log(countBoomerangs([2, 2, 2, 2, 3, 2, 3]), 2);
console.log(countBoomerangs([1, 2, 1, 1, 1, 2, 1]), 2);
console.log(countBoomerangs([5, 1, 1, 1, 1, 4, 1]), 1);
console.log(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]), 3);
console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1]), 5);
console.log(countBoomerangs([5, 5, 5]), 0);
