// https://edabit.com/challenge/jRXxKKZh5kGojDd2H

const routeDiff = (directions) => {
  return;
};

// Tests

console.log(routeDiff(['N', 'E', 'S', 'W']), 4);
console.log(routeDiff(['N', 'N', 'N', 'E', 'N', 'E']), 0);
console.log(routeDiff(['N', 'S', 'N', 'S', 'E', 'W', 'E', 'E']), 6);
console.log(routeDiff(['N', 'S', 'N', 'S', 'E']), 4);
console.log(routeDiff(['N', 'N', 'S', 'S', 'S', 'S', 'E']), 4);
console.log(routeDiff(['N', 'N', 'S', 'S', 'W', 'S', 'E']), 6);
console.log(routeDiff(['N', 'S', 'E']), 2);
console.log(routeDiff(['S', 'S', 'S']), 0);
console.log(routeDiff(['S', 'S', 'S', 'S', 'S', 'N']), 2);
