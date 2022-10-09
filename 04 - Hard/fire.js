// https://edabit.com/challenge/uQAYSdC3HFtGp3NY8

const getRow = { A: 0, B: 1, C: 2, D: 3, E: 4 };

const fire = (matrix, coordinates) => {
  const [row, col] = [...coordinates];
  const coordinate = matrix[getRow[row]][col - 1];
  return coordinate === '.' ? 'splash' : 'BOOM';
};

// Tests

console.log(
  fire(
    [
      ['.', '.', '.', '*', '*'],
      ['.', '*', '.', '.', '.'],
      ['.', '*', '.', '.', '.'],
      ['.', '*', '.', '.', '.'],
      ['.', '.', '*', '*', '.'],
    ],
    'A1'
  ),
  'splash',
  'A1: target first nested array, first element'
);

console.log(
  fire(
    [
      ['.', '.', '.', '*', '*'],
      ['.', '*', '.', '.', '.'],
      ['.', '*', '.', '.', '.'],
      ['.', '*', '.', '.', '.'],
      ['.', '.', '*', '*', '.'],
    ],
    'C2'
  ),
  'BOOM',
  'C2: target third nested array, second element'
);

console.log(
  fire(
    [
      ['.', '.'],
      ['*', '*'],
    ],
    'B1'
  ),
  'BOOM'
);

console.log(
  fire(
    [
      ['.', '.'],
      ['*', '*'],
    ],
    'A2'
  ),
  'splash'
);

console.log(
  fire(
    [
      ['*', '.', '.'],
      ['.', '.', '.'],
      ['.', '*', '*'],
    ],
    'C3'
  ),
  'BOOM'
);

console.log(
  fire(
    [
      ['*', '.', '.'],
      ['.', '.', '.'],
      ['.', '*', '*'],
    ],
    'A3'
  ),
  'splash'
);

console.log(
  fire(
    [
      ['.', '.', '.', '.'],
      ['.', '*', '*', '.'],
      ['.', '.', '.', '.'],
      ['.', '.', '.', '.'],
    ],
    'B3'
  ),
  'BOOM'
);

console.log(
  fire(
    [
      ['.', '.', '.', '.'],
      ['.', '*', '*', '.'],
      ['.', '.', '.', '.'],
      ['.', '.', '.', '.'],
    ],
    'B4'
  ),
  'splash'
);

console.log(fire([['*']], 'A1'), 'BOOM');
