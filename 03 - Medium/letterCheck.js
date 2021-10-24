const letterCheck = (arr) => {
  const [word1, word2] = arr.map(w => w.toLowerCase());
  return [...word2].every(l => [...word1].includes(l));
}

// Tests

console.log(letterCheck(["trances", "nectar"]), true)
console.log(letterCheck(["THE EYES", "they see"]), true)
console.log(letterCheck(["assert", "staring"]), false)
console.log(letterCheck(["arches", "later"]), false)
console.log(letterCheck(["dale", "caller"]), false)
console.log(letterCheck(["parses", "parsecs"]), false)
console.log(letterCheck(["replays", "adam"]), false)
console.log(letterCheck(["mastering", "streaming"]), true)
console.log(letterCheck(["drapes", "compadres"]), false)
console.log(letterCheck(["deltas", "slated"]), true)
