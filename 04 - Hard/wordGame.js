// https://edabit.com/challenge/pgN9GtB8GacdGAcDy

/**
 * Simulates a word game between two players.
 * Rules:
 * 1. Words cannot be repeated.
 * 2. Each word must start with the last letter of the previous word.
 * 3. The first word of each round can be any word.
 *
 * @param {string[]} p1 - Array of words for Player 1
 * @param {string[]} p2 - Array of words for Player 2
 * @returns {string} - The result of the game
 */
const wordGame = (p1, p2) => { 
  // Set to keep track of used words
  const usedWords = new Set();
  
  for (let i = 0; i < p1.length; i++) {
    // Player 1's turn
    if (usedWords.has(p1[i].toLowerCase())) {
      return "Player 2 wins!"; // Word already used
    }
    usedWords.add(p1[i].toLowerCase());

    // Check if Player 1's word starts with the correct letter (except for the first round)
    if (i > 0 && p1[i][0].toLowerCase() !== p2[i-1][p2[i-1].length - 1].toLowerCase()) {
      return "Player 2 wins!"; // Incorrect starting letter
    }

    // Player 2's turn
    if (usedWords.has(p2[i].toLowerCase())) {
      return "Player 1 wins!"; // Word already used
    }
    usedWords.add(p2[i].toLowerCase());

    // Check if Player 2's word starts with the correct letter
    if (p2[i][0].toLowerCase() !== p1[i][p1[i].length - 1].toLowerCase()) {
      return "Player 1 wins!"; // Incorrect starting letter
    }
  }

  // If the loop completes without returning, the game is still valid
  return "Game continues...";
}

// Tests

console.log(wordGame(["edabit", "yellow", "growing"], ["tangy", "wedding", "ground"]), "Game continues...")
console.log(wordGame(["edabit", "yellow", "rowing"], ["tangy", "wedding", "ground"]), "Player 2 wins!")
console.log(wordGame(["edabit", "yellow", "growing"], ["tangy", "wedding", "round"]), "Player 1 wins!")
console.log(wordGame(["edabit", "yellow", "growing", "dart"], ["tangy", "wedding", "ground", "tangy"]), "Player 1 wins!")
console.log(wordGame(["edabit", "yellow", "growing", "dart", "tangy"], ["tangy", "wedding", "ground", "toast", "yellow"]), "Player 2 wins!")
console.log(wordGame(['banana',	'elephant',	'orange',	'elope',	'tiger',	'elipse',	'elevate',	'trust',	'time'], ['apple',	'tornado',	'ewe',	'event',	'rose',	'eradicate',	'eat',	'tonight',	'love']), "Player 1 wins!")