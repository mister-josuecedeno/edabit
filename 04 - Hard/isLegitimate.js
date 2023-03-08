// https://edabit.com/challenge/gqkan7642aHfjk5GF

const getFence = (arr) => {
  const fence = [];

  fence.push(arr[0]);
  fence.push(arr[arr.length - 1]);

  for (let i = 1; i < arr.length - 1; i++) {
    fence.push(arr[i][0]);
    fence.push(arr[i][arr[i].length - 1]);
  }

  return fence.flat();
};

const isLegitimate = (arr) => {
  return getFence(arr).every((f) => f === 0);
};

// Tests

console.log(
  isLegitimate([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]),
  true
);

console.log(
  isLegitimate([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0],
  ]),
  false
);

console.log(
  isLegitimate([
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ]),
  true
);

console.log(
  isLegitimate([
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ]),
  false
);

console.log(
  isLegitimate([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]),
  true
);

console.log(
  isLegitimate([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]),
  true
);

console.log(
  isLegitimate([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]),
  true
);

console.log(
  isLegitimate([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1],
  ]),
  false
);

console.log(
  isLegitimate([
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1],
    [0, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0],
  ]),
  false
);

console.log(
  isLegitimate([
    [0, 0, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]),
  true
);

console.log(
  isLegitimate([
    [0, 0, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 1],
    [0, 1, 0],
    [0, 0, 0],
  ]),
  false
);

console.log(
  isLegitimate([
    [0, 0, 0],
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0],
    [0, 0, 0],
  ]),
  false
);
