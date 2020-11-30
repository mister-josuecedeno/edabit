// Create a function that finds the highest integer in the array using recursion.

// Solution
const findHighest = (arr, index = 0, highest = 0) => {
  if (index > arr.length) {
    return highest;
  }

  if (arr[index] > highest) {
    highest = arr[index];
  }

  return findHighest(arr, index + 1, highest);
};

// Tests
console.log(findHighest([-1, 3, 5, 6, 99, 12, 2]), 99);

console.log(findHighest([0, 12, 4, 87]), 87);

console.log(findHighest([6, 7, 8]), 8);
