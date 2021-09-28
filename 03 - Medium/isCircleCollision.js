// Radius of the circle. (r)
// Center position on the x-axis. (x)
// Center position on the y-axis. (y)

const isCircleCollision = (c1, c2) => {
  const [r1,x1,y1] = c1;
  const [r2,x2,y2] = c2;

  let dx = x1 - x2;
  let dy = y1 - y2;
  let distance = Math.sqrt(dx * dx + dy * dy);

  return distance < r1 + r2;
}

// Tests

console.log(isCircleCollision([10, 0, 0], [10, 10, 10]), true)
console.log(isCircleCollision([10, 0, 0], [5, 0, 0]), true)
console.log(isCircleCollision([1, 0, 0], [1, 0, 0]), true)
console.log(isCircleCollision([5, 0, 0], [5, 10, 10]), false)
console.log(isCircleCollision([1, 0, 0], [1, 10, 10]), false)
