const quadraticEquation = (a, b, c) => {
  return (-b+Math.sqrt(Math.pow(b, 2)-4*a*c))/(2*a);
}

// Tests

console.log(quadraticEquation(1, 2, -3), 1)
console.log(quadraticEquation(2, -7, 3), 3)
console.log(quadraticEquation(1, -12, -28), 14)
