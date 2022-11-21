// https://edabit.com/challenge/WuoMiJRr69hPRQJYx

const canPartition = (arr) => {
  let result = false;

  for (let i = 0; i < arr.length; i++) {
    let num = arr.pop();
    let product = arr.reduce((acc, cv) => acc * cv, 1);
    if (num === product) {
      result = true;
      break;
    }
    arr.unshift(num);
  }

  return result;
};

// Tests

console.log(canPartition([-1, -10, 1, -2, 20]), false);
console.log(canPartition([-1, -20, 5, -1, -2, 2]), true);
console.log(canPartition([2, 8, 4, 1]), true);
console.log(canPartition([1, 1, -1, 1]), false);
console.log(canPartition([-1, -1, 1, 1]), true);
console.log(canPartition([0, 5, 1, -1]), false);
console.log(canPartition([0, 1, 1, -1]), false);
console.log(canPartition([0, 1, 1, 1]), false);
console.log(canPartition([0, 0, 1, 1]), true);
console.log(canPartition([0, 0, 1]), true);
console.log(canPartition([0, 0, 0]), true);
console.log(canPartition([5, 5, 25, 100]), false);
console.log(canPartition([-1, 5, 20, 100]), false);
console.log(canPartition([1, 1, 1, 1]), true);
console.log(canPartition([-1, 1, -1]), true);
console.log(canPartition([-1, 1, 1]), false);
