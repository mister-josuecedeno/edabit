// https://edabit.com/challenge/QK4QbxN6oj4EMf5zy

const warpTunnel = (mtx, n) => {
  return;
};

// Tests

console.log(
  warpTunnel(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    2
  ),
  [
    [8, 9, 1],
    [2, 3, 4],
    [5, 6, 7],
  ]
);
console.log(
  warpTunnel(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    8
  ),
  [
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 1],
  ]
);
console.log(
  warpTunnel(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    9
  ),
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
);
console.log(
  warpTunnel(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    18
  ),
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
);
console.log(
  warpTunnel(
    [
      ['a', 'b'],
      ['c', 'd'],
      ['e', 'f'],
    ],
    4
  ),
  [
    ['c', 'd'],
    ['e', 'f'],
    ['a', 'b'],
  ]
);
console.log(
  warpTunnel(
    [
      [1, 'x', 3],
      [4, 'w', 6],
      [7, 'y', 9],
    ],
    19
  ),
  [
    [9, 1, 'x'],
    [3, 4, 'w'],
    [6, 7, 'y'],
  ]
);
console.log(
  warpTunnel(
    [
      [12, 36],
      [18, 27],
    ],
    149
  ),
  [
    [27, 12],
    [36, 18],
  ]
);
