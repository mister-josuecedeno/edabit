// https://edabit.com/challenge/pS3FkeSKxZe3AaWMG

const finalDirection = (initial, turns) => { 
  // Define the compass directions in order
  const directions = ["N", "E", "S", "W"];
    
  // Get the index of the initial direction
  let currentIndex = directions.indexOf(initial);
  
  // Process each turn in the sequence
  turns.forEach(turn => {
      if (turn === "L") {
          // Counter-clockwise turn (left)
          currentIndex = (currentIndex - 1 + 4) % 4;
      } else if (turn === "R") {
          // Clockwise turn (right)
          currentIndex = (currentIndex + 1) % 4;
      }
  });
  
  // Return the final direction faced
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