// https://edabit.com/challenge/cLpDSS2HwAq86wgyv

const sentenceSearcher = (str, word) => {
  const sentences = str.split('.').map(sentence => sentence.trim());
  const result = sentences.find(sentence => sentence.toLowerCase().includes(word.toLowerCase())) || '';
  return result.length > 0 ? result + '.' : '';
}

// Tests
const txt = "I have a cat. I have a mat. Things are going swell."

console.log(sentenceSearcher(txt, "cat"), "I have a cat.")
console.log(sentenceSearcher(txt, "MAT"), "I have a mat.")
console.log(sentenceSearcher(txt, "Have"), "I have a cat.")
console.log(sentenceSearcher(txt, "swell"), "Things are going swell.")
console.log(sentenceSearcher(txt, "things"), "Things are going swell.")
console.log(sentenceSearcher(txt, "flat"), "")
