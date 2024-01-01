// https://edabit.com/challenge/6ALbTxgu8BZaa6YYN

// Refactor
const equalsCheck = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
};

const numberOfSwaps = (arr) => {
  const sorted = [...arr].sort();
  let i = 0;
  let swaps = 0;

  while (!equalsCheck(arr, sorted)) {
    let current = arr[i];
    let next = arr[i + 1];

    if (current > next) {
      let temp = next;
      arr[i + 1] = current;
      arr[i] = temp;
    }

    if (i === arr.length - 1) {
      i = 0;
      swaps++;
    }

    i++;
  }

  return swaps;
};

// Tests

console.log(numberOfSwaps([3, 9, 7, 4]), 3);
console.log(numberOfSwaps([5, 4, 3]), 3);
console.log(numberOfSwaps([5, 4, 3, 2]), 6);
console.log(numberOfSwaps([1, 2, 4, 3]), 1);
console.log(numberOfSwaps([1, 2, 5, 4, 3]), 3);
console.log(numberOfSwaps([1, 3, 4, 5]), 0);
console.log(numberOfSwaps([1, 2]), 0);
