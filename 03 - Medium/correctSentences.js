const correctSentences = (str) => {
  // Remove extra spaces.
  let trim = str.replace(/\s+/g,' ')
                .slice(1);

  // Capitalise first character.
  let upper = trim[0].toUpperCase() + trim.slice(1);

  // A dot at the end.
  let words = upper.trim().split(' ');

  for (let i = 0; i < words.length - 1; i++) {
    if(words[i + 1][0] == words[i + 1][0].toUpperCase()){
      words[i] = `${words[i]}.`
    }
  }
  
  return `${words.join(' ')}.`;
}

// Tests

console.log(correctSentences("  mubashir loves  edabit  Matt  loves  edabit  "), "Mubashir loves edabit. Matt loves edabit.")
console.log(correctSentences("  he is an engineer He sleeps a lot"), "He is an engineer. He sleeps a lot.")
console.log(correctSentences(" his english is not good Help him     Thank you"), "His english is not good. Help him. Thank you.")
console.log(correctSentences(" he is ready to join   airforce  Waiting for the  final approval"), "He is ready to join airforce. Waiting for the final approval.")
