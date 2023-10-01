// https://edabit.com/challenge/Jaox8TDLREobGf9oJ

const fillRange = ([start, end]) => {
  const result = [];

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
};

const coveredIntegers = (arr) => {
  const filledArr = arr.map((a) => fillRange(a));
  const numbers = new Set(filledArr.flat().sort((a, b) => a - b));
  return numbers.size;
};

// Tests

console.log(
  coveredIntegers([
    [80, 81],
    [1, 2],
    [9, 11],
  ]),
  7
);
console.log(
  coveredIntegers([
    [3, 6],
    [4, 6],
    [5, 6],
  ]),
  4
);
console.log(
  coveredIntegers([
    [1, 2],
    [1, 2],
  ]),
  2
);
console.log(coveredIntegers([[1, 11]]), 11);
console.log(
  coveredIntegers([
    [8, 9],
    [102, 104],
  ]),
  5
);
