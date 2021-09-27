const findVertex = (x) => {
  const regex = /\-?\w*x\b/gi;
  const matches = x.match(regex);
  
  let [a, b] = matches.map(n => +n.slice(0,-1));
  let vertex = -b / (2 * a);
  return Math.floor(vertex);
}

// Tests

console.log(findVertex("-5x + 50x -120"), 5)
console.log(findVertex("-6x + 36x -72"), 3)
console.log(findVertex("7x +14x +28"), -1)
console.log(findVertex("4x -20x +12"), 2)
console.log(findVertex("2x -18x -20"), 4)
console.log(findVertex("9x +81x -27"), -5)
