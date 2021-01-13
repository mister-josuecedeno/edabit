const vowelsAndConsonants = (s) => {
  const vowels = s.match(/[aeiou]/gi);
  const consonants = s.match(/[^aeiou]/gi);
  for (let char of [...vowels, ...consonants]) {
    console.log(char);
  }
};

// Tests
console.log(vowelsAndConsonants('javascriptloops'));
