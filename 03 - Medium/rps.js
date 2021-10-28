const rps = (s1, s2) => {
  const wins = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper'
  }
  
  if (s1 === s2) return 'TIE';

  return s2 === wins[s1] ? 'Player 1 wins' : 'Player 2 wins';
}

// Tests

console.log(rps("rock", "paper"), "Player 2 wins")
console.log(rps("paper", "rock"), "Player 1 wins")
console.log(rps("paper", "scissors"), "Player 2 wins")
console.log(rps("scissors", "scissors"), "TIE")
console.log(rps("scissors", "paper"), "Player 1 wins")
