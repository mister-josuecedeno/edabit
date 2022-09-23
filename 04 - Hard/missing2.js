// https://edabit.com/challenge/M6hcm6ezCoRBbANQr

const missing = (arr) => {
  const len = arr.length;
  const diff1 = arr[1] - arr[0];
  const diff2 = arr[len - 1] - arr[len - 2];
  const diff = Math.min(diff1, diff2);
  let expected;

  for (let i = 0; i < arr.length; i++) {
    expected = arr[i] + diff;
    if (arr[i + 1] !== expected) return expected;
  }

  return 'Nothing is missing.';
};

// Tests

[
  [[1, 3, 4, 5], 2],
  [[2, 4, 6, 8, 10, 14, 16], 12],
  [[12, 15, 18, 21, 24, 30, 33], 27],
  [[0, 60, 180], 120],
  [[-1.25, 1.25, 2.5], 0],
  [[1, 19, 28], 10],
  [[100, 500, 900, 1300, 2100, 2500, 2900], 1700],
  [[1.5, 2, 3], 2.5],
].forEach((x) => console.log(missing(x[0]), x[1]));
