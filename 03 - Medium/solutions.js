const solutions = (a,b,c) => {
  let discriminant = Math.pow(b,2) - (4 * a * c);
  
  if (discriminant < 0) return 0;
  if (discriminant == 0) return 1;
  if (discriminant > 0) return 2;
}

// Tests

console.log(solutions(1, 0, -1), 2)
console.log(solutions(1, 0, 0), 1)
console.log(solutions(1, 0, 1), 0)
console.log(solutions(200, 420, 800), 0)
console.log(solutions(200, 420, -800), 2)
console.log(solutions(1000, 1000, 0), 2)
console.log(solutions(10000, 400, 4), 1)
