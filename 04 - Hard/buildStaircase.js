// https://edabit.com/challenge/7HiitQLp9CQGQNWJr

const buildStaircase = (height, block) => {
  const result = [];
  let fill, steps;

  for (let i = 1; i <= height; i++) {
    fill = block.repeat(i);
    steps = '_'.repeat(height - i);
    result.push(Array.from(fill + steps));
  }

  return result;
};

// Tests

console.log(buildStaircase(0, '#'), []);

console.log(buildStaircase(1, '#'), [['#']]);

console.log(buildStaircase(2, '#'), [
  ['#', '_'],
  ['#', '#'],
]);

console.log(buildStaircase(3, '#'), [
  ['#', '_', '_'],
  ['#', '#', '_'],
  ['#', '#', '#'],
]);

console.log(buildStaircase(4, '#'), [
  ['#', '_', '_', '_'],
  ['#', '#', '_', '_'],
  ['#', '#', '#', '_'],
  ['#', '#', '#', '#'],
]);

console.log(buildStaircase(3, 'A'), [
  ['A', '_', '_'],
  ['A', 'A', '_'],
  ['A', 'A', 'A'],
]);

console.log(buildStaircase(4, 'A'), [
  ['A', '_', '_', '_'],
  ['A', 'A', '_', '_'],
  ['A', 'A', 'A', '_'],
  ['A', 'A', 'A', 'A'],
]);

console.log(buildStaircase(4, '$'), [
  ['$', '_', '_', '_'],
  ['$', '$', '_', '_'],
  ['$', '$', '$', '_'],
  ['$', '$', '$', '$'],
]);
