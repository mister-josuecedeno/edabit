// https://edabit.com/challenge/pS3FkeSKxZe3AaWMG

const finalDirection = (initial, turns) => { 
  const directions = ["N", "E", "S", "W"];
  let currentIndex = directions.indexOf(initial);
  
  turns.forEach(turn => {
      if (turn === "L") {
          currentIndex = (currentIndex - 1 + 4) % 4;
      } else if (turn === "R") {
          currentIndex = (currentIndex + 1) % 4;
      }
  });
  
  return directions[currentIndex]; 
}

// Tests

console.log(finalDirection('N', ['L', 'L', 'L']), 'E')
console.log(finalDirection('N', ['R', 'R', 'R', 'R', 'R', 'R', 'R']), 'W')
console.log(finalDirection('N', ['R', 'R', 'R', 'L']), 'S')
console.log(finalDirection('N', ['R', 'R', 'R', 'R']), 'N')
console.log(finalDirection('N', ['R', 'L']), 'N')
console.log(finalDirection('S', ['R', 'L', 'R', 'L', 'R']), 'W')
console.log(finalDirection('S', ['R', 'L', 'R', 'L', 'R', 'L']), 'S')