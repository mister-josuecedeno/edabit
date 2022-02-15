const countOnes = (arr) => {
  return (arr.join('').match(/[1]{2,}/g) || []).length;
};

// Tests

console.log(countOnes([1, 1, 1, 1, 1]), 1);
console.log(countOnes([1, 1, 1, 1, 0]), 1);
console.log(countOnes([0, 0, 0, 0, 0]), 0);
console.log(countOnes([1, 0, 0, 0, 0]), 0);
console.log(countOnes([1, 0, 1, 0, 1]), 0);
console.log(countOnes([1, 0, 0, 0, 1, 0, 0, 1, 1]), 1);
console.log(countOnes([1, 1, 0, 1, 1, 0, 0, 1, 1]), 3);
console.log(countOnes([1, 0, 0, 1, 1, 0, 0, 1, 1]), 2);
console.log(countOnes([1, 0, 0, 1, 1, 0, 1, 1, 1]), 2);
console.log(countOnes([1, 0, 1, 0, 1, 0, 1, 0]), 0);
console.log(countOnes([1, 1, 1, 1, 0, 0, 0, 0]), 1);
console.log(countOnes([1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1]), 3);
