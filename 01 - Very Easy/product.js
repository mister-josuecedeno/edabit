// Create a function that takes an array and
// returns the product of the largest and second largest number.

// Solution
const product = (arr) => {
  let largest, nextLargest;

  for (let n of arr) {
    if (largest === undefined) {
      largest = n;
    } else if (n > largest) {
      nextLargest = largest;
      largest = n;
    } else if (n > nextLargest && n !== largest) {
      nextLargest = n;
    }
  }

  if (nextLargest === undefined) {
    nextLargest = largest;
  }

  return largest * nextLargest;
};

// Test
console.log(product([2, 3, 1, -1, 2]), 6);
console.log(product([-2, -2, -1, -1]), 2);
console.log(product([8, 8, 8]), 64);
console.log(product([-2, -1, 100, -12, 0]), 0);
console.log(product([1, 2, 3, 4]), 12);
console.log(product([-12, 5, 5, 8, 8, 8]), 40);
console.log(product([2, 8, 8, 8]), 16);
