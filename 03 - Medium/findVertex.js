const findVertex = (x) => {
  const equation = x.split(' ');
  
  console.log(equation);
  let a = parseInt(equation[0]);
  let b = parseInt(equation[2]);
  console.log(a,b)
  return -b / (2 * a);
}

// Tests

console.log(findVertex("-5x + 50x -120"), 5)
console.log(findVertex("-6x + 36x -72"), 3)
console.log(findVertex("7x +14x +28"), -1)
console.log(findVertex("4x -20x +12"), 2)
console.log(findVertex("2x -18x -20"), 4)
console.log(findVertex("9x +81x -27"), -5)
