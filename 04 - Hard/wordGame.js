// https://edabit.com/challenge/pgN9GtB8GacdGAcDy

const wordGame = (p1, p2) => { 
  const lastLetter = p1.map(w => w[w.length - 1]);
  const firstLetter = p2.map(w => w[0]);
  return [lastLetter, firstLetter]; 
}

// Tests

console.log(wordGame(["edabit", "yellow", "growing"], ["tangy", "wedding", "ground"]), "Game continues...")
console.log(wordGame(["edabit", "yellow", "rowing"], ["tangy", "wedding", "ground"]), "Player 2 wins!")
console.log(wordGame(["edabit", "yellow", "growing"], ["tangy", "wedding", "round"]), "Player 1 wins!")
console.log(wordGame(["edabit", "yellow", "growing", "dart"], ["tangy", "wedding", "ground", "tangy"]), "Player 1 wins!")
console.log(wordGame(["edabit", "yellow", "growing", "dart", "tangy"], ["tangy", "wedding", "ground", "toast", "yellow"]), "Player 2 wins!")
console.log(wordGame(['banana',	'elephant',	'orange',	'elope',	'tiger',	'elipse',	'elevate',	'trust',	'time'], ['apple',	'tornado',	'ewe',	'event',	'rose',	'eradicate',	'eat',	'tonight',	'love']), "Player 1 wins!")