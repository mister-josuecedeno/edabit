// https://edabit.com/challenge/W9TyA4At3HNYn4B5u

const twins = (arr) => {
  const sum = arr.reduce((acc, cv) => acc + cv, 0);
  let runningSum = 0;
  let foundIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    runningSum += arr[i];
    if (sum - runningSum === runningSum) {
      foundIndex = i + 1;
    }
  }

  return foundIndex;
};

// Tests

console.log(twins([1, 2, 3, 4, 5, 5]), 4);
console.log(twins([3, 3]), 1);
console.log(twins([10, 20, 30, 5, 40, 50, 40, 15]), 5);
console.log(twins([3, 4, 6, 7, 6]), 3);
