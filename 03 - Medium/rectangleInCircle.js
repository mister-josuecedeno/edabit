const rectangleInCircle = (w, h, radius) => {
  let diameter = radius * 2;
  return Math.hypot(w, h) <= diameter;
}

// Tests

console.log(rectangleInCircle(5, 12, 7), true)
console.log(rectangleInCircle(5, 12, 6), false)
console.log(rectangleInCircle(3, 7, 4), true)
console.log(rectangleInCircle(4, 7, 4), false)
console.log(rectangleInCircle(11, 1, 6), true)
console.log(rectangleInCircle(21, 12, 12), false)
