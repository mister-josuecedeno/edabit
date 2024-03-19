// https://edabit.com/challenge/HSprZxYCc3KxysAoK

const exitMaze = (maze, directions) => {
  return;
};

// Tests

const maze = [
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 3, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 1, 1, 1, 2, 1],
];

console.log(
  exitMaze(maze, [
    'N',
    'N',
    'N',
    'W',
    'W',
    'W',
    'N',
    'N',
    'W',
    'W',
    'S',
    'S',
    'S',
    'S',
    'W',
    'W',
    'N',
    'N',
    'N',
    'N',
    'N',
    'N',
    'N',
  ]),
  'Finish'
);
console.log(
  exitMaze(maze, [
    'N',
    'N',
    'N',
    'N',
    'N',
    'N',
    'N',
    'N',
    'W',
    'W',
    'W',
    'S',
    'W',
    'W',
    'N',
  ]),
  'Lost'
);
console.log(
  exitMaze(maze, [
    'N',
    'N',
    'N',
    'N',
    'N',
    'E',
    'E',
    'S',
    'S',
    'S',
    'S',
    'S',
    'S',
  ]),
  'Dead'
);
console.log(exitMaze(maze, ['N', 'W', 'W', 'W', 'W']), 'Dead');
console.log(
  exitMaze(maze, [
    'N',
    'N',
    'N',
    'N',
    'N',
    'N',
    'N',
    'N',
    'N',
    'S',
    'S',
    'S',
    'S',
    'S',
    'S',
    'S',
    'S',
    'S',
  ]),
  'Lost'
);
console.log(exitMaze(maze, ['N', 'E', 'E']), 'Dead');
console.log(
  exitMaze(maze, [
    'N',
    'W',
    'W',
    'W',
    'N',
    'N',
    'N',
    'N',
    'W',
    'W',
    'S',
    'S',
    'S',
    'S',
    'W',
    'W',
    'N',
    'N',
    'N',
    'N',
    'N',
    'N',
    'N',
    'S',
    'S',
  ]),
  'Finish'
);
console.log(exitMaze(maze, ['N', 'W', 'W', 'W', 'N', 'N']), 'Lost');
console.log(exitMaze(maze, ['N', 'N', 'N', 'E']), 'Lost');
console.log(
  exitMaze(maze, [
    'N',
    'N',
    'N',
    'W',
    'W',
    'W',
    'N',
    'N',
    'W',
    'W',
    'S',
    'S',
    'S',
    'S',
    'S',
    'S',
  ]),
  'Dead'
);
console.log(
  exitMaze(maze, [
    'N',
    'W',
    'W',
    'W',
    'N',
    'N',
    'N',
    'N',
    'W',
    'W',
    'S',
    'S',
    'S',
    'S',
    'W',
    'W',
    'N',
    'N',
    'N',
    'N',
    'N',
    'N',
    'N',
  ]),
  'Finish'
);
