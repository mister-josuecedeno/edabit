const treePhotography = (heights) => {
  const left = () => {
    let ct = 1;
    let max = heights[0];

    for (let i = 1; i < heights.length; i++) {
      if (heights[i] > max) {
        ct++;
        max = heights[i];
      }
    }

    return ct;
  };

  const right = () => {
    let ct = 1;
    let max = heights[heights.length - 1];

    for (let i = heights.length - 2; i >= 0; i--) {
      if (heights[i] > max) {
        ct++;
        max = heights[i];
      }
    }
    return ct;
  };

  return left() > right() ? 'left' : 'right';
};

// Tests
let [expectedParam, actualParam] = [
  [
    'left',
    'right',
    'left',
    'left',
    'right',
    'right',
    'left',
    'right',
    'right',
    'left',
    'left',
    'left',
  ],
  [
    [1, 2, 3, 6, 5],
    [5, 6, 5, 4],
    [1, 1, 2, 2, 2, 2, 3],
    [1, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2],
    [3, 3, 3, 3, 2],
    [4, 3, 2, 3, 3, 3, 1],
    [3, 1, 4, 5, 2, 5, 1],
    [4, 3, 3, 4, 3, 1, 3],
    [5, 1, 2],
    [1, 2, 4, 1, 5, 3, 1],
    [1, 1, 1, 4, 1, 3, 5],
    [3, 1, 4, 1, 5, 9, 2, 6],
  ],
];
for (let i in expectedParam)
  console.log(treePhotography(actualParam[i]), expectedParam[i]);
