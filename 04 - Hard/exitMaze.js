// https://edabit.com/challenge/HSprZxYCc3KxysAoK

// Not my solution

// const exitMaze = (maze, directions) => {
//   return;
// };

function exitMaze(maze, directions) {
  let position = findStartPosition(maze);
  if (!position) return 'No start point';

  for (let direction of directions) {
    switch (direction) {
      case 'N':
        position.x--;
        break;
      case 'E':
        position.y++;
        break;
      case 'S':
        position.x++;
        break;
      case 'W':
        position.y--;
        break;
    }

    if (
      position.x < 0 ||
      position.x >= maze.length ||
      position.y < 0 ||
      position.y >= maze[0].length
    ) {
      return 'Dead';
    } else if (maze[position.x][position.y] === 1) {
      return 'Dead';
    } else if (maze[position.x][position.y] === 3) {
      return 'Finish';
    }
  }

  return 'Lost';
}

function findStartPosition(maze) {
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 2) {
        return { x: i, y: j };
      }
    }
  }
  return null;
}

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
