const abbreviate = (sentence, n=4) => {
  const words = sentence.toUpperCase()
                        .split(' ');
  let abbreviation = '';
  
  for (const word of words) {
    if(word.length >= n) abbreviation += word[0];
  }

  return abbreviation;
}

// Tests

console.log(abbreviate("do it yourself", 2), "DIY")
console.log(abbreviate("attention AND deficit OR hyperactivity THE disorder"), "ADHD")
console.log(abbreviate("the acronym of long word lengths", 5), "AL")
console.log(abbreviate("laugh out loud"), "LL")
console.log(abbreviate("Keep It Simple Stupid"), "KSS")
console.log(abbreviate("laugh out loud", 3), "LOL")
console.log(abbreviate("Keep It Simple Stupid",2), "KISS")
