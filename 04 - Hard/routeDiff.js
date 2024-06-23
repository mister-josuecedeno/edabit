// https://edabit.com/challenge/jRXxKKZh5kGojDd2H

// Not my solution
const routeDiff = (directions) => {
  // Initialize counters for each direction
  let north = 0,
    south = 0,
    east = 0,
    west = 0;

  // Count occurrences of each direction
  for (let direction of directions) {
    if (direction === 'N') north++;
    if (direction === 'S') south++;
    if (direction === 'E') east++;
    if (direction === 'W') west++;
  }

  // Calculate optimal steps in each direction
  let optimalNorthSouth = Math.abs(north - south);
  let optimalEastWest = Math.abs(east - west);

  // Total optimal path length
  let optimalPathLength = optimalNorthSouth + optimalEastWest;

  // Given path length
  let givenPathLength = directions.length;

  // Difference between given path and optimal path
  return givenPathLength - optimalPathLength;
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
