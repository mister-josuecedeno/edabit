const vowelLinks = (str) => {
  const regex = /[aeiou]/i;
  const words = str.split(' ');

  for (let i = 0; i < words.length - 1; i++) {
    let word1 = regex.test(words[i].slice(-1));
    let word2 = regex.test(words[i + 1].slice(0, 1));

    if (word1 && word2) return true;
  }

  return false;
};

// Tests
console.log(vowelLinks('an open fire'), false);
console.log(vowelLinks('the sudden applause'), false);
console.log(vowelLinks('the large appliances'), true);
console.log(vowelLinks('creative environment'), true);
console.log(vowelLinks('Creative Environment'), true);
console.log(vowelLinks('beneficial luggage'), false);
console.log(vowelLinks('the eagle swooped down low'), true);
console.log(vowelLinks('this is not a drill'), false);
console.log(vowelLinks('Patrice Evra'), true);
console.log(vowelLinks('please log on to edabit'), true);
console.log(vowelLinks('the quick brown fox was sad'), false);
