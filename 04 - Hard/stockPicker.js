// https://edabit.com/challenge/DQR6rjLkFtKgoqgWX

const stockPicker = (arr) => {
  let maxProfit = -1;

  for (let i = 0; i < arr.length - 1; i++) {
    let max = Math.max(...arr.slice(i + 1));
    let diff = max - arr[i];
    if (diff > maxProfit) maxProfit = diff;
  }

  return maxProfit;
};

// Tests

console.log(stockPicker([90, 100, 111, 0, 1, 2, 3]), 21);
console.log(stockPicker([1, 2, 4, 10, 100, 2, 3]), 99);
console.log(stockPicker([10, 1000, 1, 1, 1, 2000, 3]), 1999);
console.log(stockPicker([7, 1, 5, 5, 2, 1, 3]), 4);
console.log(stockPicker([100, 10, 8, 5]), -1);
