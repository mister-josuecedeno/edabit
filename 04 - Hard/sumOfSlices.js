// https://edabit.com/challenge/iaySFYs3oTQDboeqd

const sumOfSlices = (arr) => {
  const result = [];
  let sum = 0;
  let next = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    next = arr[i + 1];
    if (sum + next >= 100 || next === undefined) {
      result.push(sum);
      sum = 0;
    }
  }

  return result;
};

// Tests

console.log(
  sumOfSlices([
    10, 29, 13, 14, 15, 16, 17, 31, 20, 10, 29, 13, 14, 15, 16, 17, 31, 20, 100,
  ]),
  [97, 78, 87, 68, 100]
);
console.log(sumOfSlices([58, 3, 38, 99, 10]), [99, 99, 10]);
console.log(sumOfSlices([13]), [13]);
console.log(
  sumOfSlices([
    62, 40, 33, 23, 44, 20, 30, 46, 12, 48, 16, 71, 80, 51, 37, 42, 68, 35, 19,
    41, 100, 3, 33, 37, 26, 65, 17, 44, 14, 35,
  ]),
  [62, 96, 94, 58, 64, 71, 80, 88, 42, 68, 95, 100, 99, 82, 93]
);
console.log(sumOfSlices([30, 15, 75, 47]), [45, 75, 47]);
