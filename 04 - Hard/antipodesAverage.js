const getEvenHalf = (n) => (n % 2 === 0 ? n / 2 : (n - 1) / 2);

const splitArray = (arr) => {
  const half = getEvenHalf(arr.length);
  return [arr.slice(0, half), arr.slice(-half)];
};

const antipodesAverage = (arr) => {
  const [left, right] = splitArray(arr);

  const reversed = [...right].reverse();
  const sum = left.map((n, i) => n + reversed[i]);

  return sum.map((n) => n / 2);
};

// Tests

console.log(antipodesAverage([1, 2, 3, 4]), [2.5, 2.5], 'Example #1');
console.log(antipodesAverage([1, 2, 3, 4, 5]), [3, 3], 'Example #2');
console.log(antipodesAverage([-1, -2]), [-1.5], 'Example #3');
console.log(antipodesAverage([1, 2, 5, 10]), [5.5, 3.5]);
console.log(antipodesAverage([1, 2, 3, 5, 7, 9]), [5, 4.5, 4]);
console.log(antipodesAverage([-1, -4, -12, -2, -11, -6]), [-3.5, -7.5, -7]);
console.log(antipodesAverage([5, -80, 66, -8, -6]), [-0.5, -44]);
console.log(antipodesAverage([-1, 0, 1]), [0]);
