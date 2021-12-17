const rectangles = (step) => {
  return Math.pow(((step * (step + 1) ) / 2), 2);
}

// Tests

console.log(rectangles(64), 4326400)
console.log(rectangles(76), 8561476)
console.log(rectangles(10), 3025)
console.log(rectangles(79), 9985600)
console.log(rectangles(84), 12744900)
console.log(rectangles(0), 0)
console.log(rectangles(60), 3348900)
console.log(rectangles(29), 189225)
console.log(rectangles(18), 29241)
console.log(rectangles(74), 7700625)
console.log(rectangles(16), 18496)
console.log(rectangles(64), 4326400)
