const correctSentences = (str) => {
  // Remove extra spaces.
  let trim = str.replace(/\s+/g,' ');
  trim.trim();
  console.log('|' + trim + '|');

  // Capitalise first character.
  let upper = trim[0].toUpperCase() + trim.slice(1);
  console.log(upper)

  // Dot followed by an empty space before "Matt".
  // A dot at the end.

  return upper;
}

// Tests

console.log(correctSentences("  mubashir loves  edabit  Matt  loves  edabit  "), "Mubashir loves edabit. Matt loves edabit.")
console.log(correctSentences("  he is an engineer He sleeps a lot"), "He is an engineer. He sleeps a lot.")
console.log(correctSentences(" his english is not good Help him     Thank you"), "His english is not good. Help him. Thank you.")
console.log(correctSentences(" he is ready to join   airforce  Waiting for the  final approval"), "He is ready to join airforce. Waiting for the final approval.")
