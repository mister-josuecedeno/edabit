// A snail goes up the stairs. Every step, he must go up the step,
// then go across to the next step. He wants to reach the top of the tower.

// Write a function that returns the distance the snail must travel to the
// top of the tower given the height and length of each step and the height of the tower.

// Solution

const totalDistance = (height, length, tower) => {
  const steps = tower / height;
  return +((height + length) * steps).toFixed(1);
};

// Tests

console.log(totalDistance(0.2, 0.4, 100.0), 300.0);
console.log(totalDistance(0.12, 0.1, 10.0), 18.3);
console.log(totalDistance(0.5, 0.5, 25.0), 50.0);
console.log(totalDistance(0.1, 0.1, 6.0), 12.0);
console.log(totalDistance(0.05, 0.1, 1.1), 3.3);
console.log(totalDistance(1.0, 1.0, 777.0), 1554.0);
console.log(totalDistance(0.2, 0.1, 100.6), 150.9);
