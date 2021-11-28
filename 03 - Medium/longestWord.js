const longestWord = (sentence) => {
  const words = sentence.split(' ')
  const lengths = words.map(w => w.length);
  const max = Math.max(...lengths);
  return words[lengths.indexOf(max)];
}

// Tests
console.log(longestWord("Hello darkness my old friend"), "darkness")
console.log(longestWord("Hello there mate"), "Hello")
console.log(longestWord("Kayla's toy is plastic"), "Kayla's")
console.log(longestWord("Football is so cool!!!!!"), "cool!!!!!")
